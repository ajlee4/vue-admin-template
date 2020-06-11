<template>
  <div>
    <h2>Редактирование вопроса</h2>
    <el-form label-position="top" label-width="100px" class="category-form">
      <el-row :gutter="20" align="bottom" class="category-form-row">
        <el-col :span="6">
          <el-form-item
            label="Название вопроса"
            :class="{
                  'is-error':
                    $v.data.question.$dirty &&
                    !$v.data.question.required
                }"
          >
            <el-input v-model="data.question"></el-input>
            <small
              v-if="
                    $v.data.question.$dirty &&
                      !$v.data.question.required
                  "
              class="error-text"
            >Поле "Название вопроса" не должно быть пустым</small>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20" align="bottom" class="category-form-row">
        <el-col :span="6">
          <el-form-item label="Выбор Категории">
            <el-select
              ref="select"
              v-model="data.category_id"
              placeholder="Select"
              class="course-select"
            >
              <el-option
                v-for="item in categories"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Выбор Уровня">
            <el-select
              ref="select"
              v-model="data.grade_id"
              placeholder="Select"
              class="course-select"
            >
              <el-option v-for="item in grades" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Выбор блока">
            <el-select
              ref="select"
              v-model="data.list_id"
              placeholder="Select"
              class="course-select"
            >
              <el-option v-for="item in level" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20" align="bottom" class="category-form-row">
        <el-col :span="12">
          <el-form-item
            label="Варианты ответа"
            :class="{
                  'is-error':
                    $v.optionsAnswer.$dirty &&
                    !$v.optionsAnswer.required
                }"
          >
            <div class="answer-field">
              <el-input class="answer-input" v-model="optionsAnswer"></el-input>

              <el-checkbox class="checkbox" v-model="trueAnswerChecked">Правильный вариант ответа</el-checkbox>
            </div>

            <small
              v-if="
                    $v.optionsAnswer.$dirty &&
                      !$v.optionsAnswer.required
                  "
              class="error-text"
            >Поле "Варианты ответа" не должно быть пустым</small>
          </el-form-item>
          <el-button
            @click="addAnswer"
            type="success"
            class="add-category-button"
          >Добавить вариант ответа</el-button>
        </el-col>
      </el-row>
      <el-row>
        <div class="table-wrap">
          <el-table :data="answer" border style="width: 100%">
            <el-table-column label="Варианты ответов">
              <template slot-scope="scope">
                <span :class="scope.row.right_answer ? 'true-answer':'' ">{{ scope.row.answer }}</span>
              </template>
            </el-table-column>
            <el-table-column align="right">
              <template slot-scope="scope">
                <el-button size="mini" type="danger" @click="deleteAnswer(scope.row.id)">Delete</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-row>
      <el-button
        type="success"
        @click="editTestQuestion(data.id)"
        class="add-category-button"
      >Изменить вопрос</el-button>
    </el-form>
  </div>
</template>


<script>
import { Message } from "element-ui";
import {
  updateTestGrades,
  createTestAnswer,
  updateTestQuestion,
  fetchCurrentTestQuestion,
  deleteTestAnswer
} from "@/api/test";
import { required } from "vuelidate/lib/validators";
export default {
  validations: {
    data: {
      question: { required }
    },
    optionsAnswer: { required }
  },
  data() {
    return {
      data: [],
      categories: [],
      grades: [],
      level: [],
      answer: [],
      right_answer: false,
      optionsAnswer: "",
      trueAnswerChecked: false,
      test: ""
    };
  },
  methods: {
    editTestGrades(id) {
      if (this.$v.$invalid) {
        Message({
          message: "Заполните обязательные поля",
          type: "error",
          showClose: true
        });
        this.$v.$touch();
        return;
      }

      updateTestGrades(id, this.data).then(() => {
          this.$router.push({ name: "test-question" });
        Message({
          message: "Уровень изменен",
          type: "success",
          showClose: true
        });
      });
    },
    addAnswer() {
      const formData = {
        answer: this.optionsAnswer, // string
        right_answer: this.trueAnswerChecked, // boolean
        question_id: this.data.id //  id
      };
      if (this.$v.$invalid) {
        Message({
          message: "Заполните обязательные поля",
          type: "error",
          showClose: true
        });
        this.$v.$touch();
        return;
      }

      createTestAnswer(formData).then(res => {
        Message({
          message: "ресурс создан",
          type: "success",
          showClose: true
        });
        this.answer.push(res.data);
        console.log(res);
        this.optionsAnswer = "";
        this.trueAnswerChecked = false;
      });
    },
    deleteAnswer(id) {
      this.$confirm("Вы хотите удалить этот элемент?", "Warning", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      })
        .then(() => {
          deleteTestAnswer(id).then(() => {
            this.answer = this.answer.filter(item => item.id !== id);
            console.log(this.data);
            Message({
              message: "ресурс удален",
              type: "success",
              showClose: true
            });
          });
          console.log(this.currentTestQuestion);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Delete canceled",
            showClose: true
          });
        });
    },
    editTestQuestion(id) {
      updateTestQuestion(id, this.data).then(() => {
        Message({
          message: "ресурс изменен",
          type: "success",
          showClose: true
        });
      });
    }
  },
  mounted() {
    fetchCurrentTestQuestion(this.$route.params.id).then(res => {
      this.data = res.data;
      this.categories = res.question_categories;
      this.grades = res.question_grades;
      this.level = res.question_lists;
      this.answer = res.data.answers;
      console.log(this.data)
    });
  }
};
</script>

<style lang="scss" scoped>
.table-wrap {
  width: 50%;
}
.true-answer {
  color: #67c23a;
  font-weight: bold;
}
.answer-field {
  display: flex;
}
.answer-input {
  margin-right: 20px;
}
</style>