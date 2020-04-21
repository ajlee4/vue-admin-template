<template>
  <div class="category-container">
    <h2>Добавить уровень</h2>
    <el-form label-position="top" label-width="100px" class="category-form">
      <el-row :gutter="20" align="bottom" class="category-form-row">
        <el-col :span="6">
          <el-form-item
            label="Название уровня"
            :class="{
                  'is-error':
                    $v.gradesName.$dirty &&
                    !$v.gradesName.required
                }"
          >
            <el-input v-model="gradesName"></el-input>
            <small
              v-if="
                    $v.gradesName.$dirty &&
                      !$v.gradesName.required
                  "
              class="error-text"
            >Поле "Название уровня" не должно быть пустым</small>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <el-button type="success" @click="addTestGrades" class="add-category-button">Добавить категорию</el-button>
  </div>
</template>

<script>
import { Message } from "element-ui";
import { createTestGrades } from "@/api/test";
import { required } from "vuelidate/lib/validators";
export default {
  validations: {
    gradesName: { required }
  },
  data() {
    return {
      gradesName: ""
    };
  },
  methods: {
    addTestGrades() {
      if (this.$v.$invalid) {
        Message({
          message: "Заполните обязательные поля",
          type: "error",
          showClose: true
        });
        this.$v.$touch();
        return;
      }
      const formData = {
        name: this.gradesName
      };

      createTestGrades(formData).then(() => {
        this.$router.push({ name: "test-level" });
        Message({
          message: "Уровень создан",
          type: "success",
          showClose: true
        });
      });
    }
  }
};
</script>

