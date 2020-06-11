<template>
  <div class="course-add-container">
    <h2>Страница создания</h2>
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      ref="courseForm"
    >
      <el-tabs type="card">
        <el-tab-pane label="Ресурс">
          <div style="margin: 20px;"></div>

          <el-row>
            <el-col :span="12">
              <el-form-item
                label="Заголовок"
                :class="{ 'is-error': ($v.course.name.$dirty && !$v.course.name.required )}"
              >
                <el-input v-model="course.name"></el-input>
                <small v-if="($v.course.name.$dirty && !$v.course.name.required )" class="error-text"
                  >Поле заголовок не должно быть пустым</small
                >
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Псевдоним">
                <el-input></el-input>
              </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item
                label="Выбор раздела"
                :class="{ 'is-error': ($v.value.$dirty && !$v.value.required) }"
              >
                <el-select
                  ref="select"
                  v-model="value"
                  placeholder="Select"
                  class="course-select"
                >
                  <el-option
                    v-for="item in data"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
                <small v-if="($v.value.$dirty && !$v.value.required)" class="error-text"
                  >Поле 'Выбор раздела' не должно быть пустым</small
                >
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6"
              ><div class="grid-content ">
                <div class="block date-picker-wrapper">
                  <el-form-item
                    label="Начало набора"
                    :class="{ 'is-error': ($v.startRecruit.$dirty && !$v.startRecruit.required) }"
                  >
                    <el-date-picker
                    class="date-picker"
                      v-model="startRecruit"
                      range-separator="|"
                      type="date"
                      placeholder="Начало набора"
                      format="dd-MM-yyyy"
                    >
                    </el-date-picker>

                    <small v-if="($v.startRecruit.$dirty && !$v.startRecruit.required)" class="error-text"
                      >Поле 'Начало набора' не должно быть пустым</small
                    >
                  </el-form-item>
                </div>
              </div></el-col
            >
            <el-col :span="6"
              ><div class="grid-content ">
                <div class="block date-picker-wrapper">
                  <el-form-item
                    label="Начало семестра"
                    :class="{ 'is-error': ($v.startDate.$dirty && !$v.startDate.required) }"
                  >
                    <el-date-picker
                      class="date-picker"
                      v-model="startDate"
                      type="date"
                      placeholder="Начало семестра"
                      format="dd-MM-yyyy"
                    >
                    </el-date-picker>

                    <small v-if="($v.startDate.$dirty && !$v.startDate.required)" class="error-text"
                      >Поле 'Начало семестра' не должно быть пустым</small
                    >
                  </el-form-item>
                </div>
              </div></el-col
            >

            <el-col :span="6"
              ><div class="grid-content ">
                <div class="block date-picker-wrapper">
                  <el-form-item
                    label="Конец семестра"
                    :class="{ 'is-error': ($v.endDate.$dirty && !$v.endDate.required) }"
                  >
                    <el-date-picker
                      class="date-picker"
                      v-model="endDate"
                      type="date"
                      placeholder="Конец семестра"
                      format="dd-MM-yyyy"
                    >
                    </el-date-picker>
                    <small v-if="($v.endDate.$dirty && !$v.endDate.required)" class="error-text"
                      >Поле 'Начало набора' не должно быть пустым</small
                    >
                  </el-form-item>
                </div>
              </div></el-col
            >
          </el-row>
          <!-- <el-row :gutter="20">
            <el-col :span="6"
              ><div class="grid-content ">
                <div class="input-title">
                  Кол-во занятий в неделю
                </div>
                <el-input
                  placeholder="Введите число"
                  v-model="quantityPerWeek"
                  type="number"
                ></el-input></div
            ></el-col>
            <el-col :span="6"
              ><div class="grid-content ">
                <div class="input-title">
                  Время проведения занятий
                </div>
                <el-input
                  placeholder="Введите текст"
                  v-model="courseTime"
                ></el-input></div
            ></el-col>

            <el-col :span="6"
              ><div class="grid-content ">
                <div class="input-title">
                  Утро
                </div>
                <el-input
                  placeholder="Введите текст"
                  v-model="timeDay"
                ></el-input></div
            ></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6"
              ><div class="grid-content ">
                <div class="input-title">
                  Вечер
                </div>
                <el-input
                  placeholder="Введите текст"
                  v-model="timeEvening"
                ></el-input></div
            ></el-col>
            <el-col :span="6"
              ><div class="grid-content ">
                <div class="input-title">
                  Стоимость
                </div>
                <el-input
                  type="number"
                  placeholder="Введите число"
                  v-model="price"
                ></el-input></div
            ></el-col>

            <el-col :span="6"
              ><div class="grid-content ">
                <div class="input-title">
                  Количество часов в курсе
                </div>
                <el-input
                  type="number"
                  placeholder="Введите число"
                  v-model="totalHours"
                ></el-input></div
            ></el-col>
          </el-row> -->
          <el-form-item label="Текст">
            <Tinymce v-model="course.intro_text"></Tinymce>
          </el-form-item>
          <el-form-item label="Контент">
            <Tinymce v-model="course.content"></Tinymce>
          </el-form-item>
          
          <!-- <div class="banner-info">
            <h3>Создание баннера</h3>

            <el-row :gutter="20">
              <el-col :span="6"
                ><div class="grid-content ">
                  <h4>Загрузите изображение</h4>
                  <el-upload
                    name="banner"
                    action="http://sandbox.alkonosthim.ru/ih/api/courses/category/store"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :auto-upload="false"
                    :on-change="changeUpload"
                  >
                    <i class="el-icon-plus"></i>
                  </el-upload>
                  <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="" />
                  </el-dialog></div
              ></el-col>
              <el-col :span="18"
                ><div class="grid-content ">
                  <h4>Введите текст баннера</h4>
                  <Tinymce v-model="banner.text"></Tinymce>
                </div>
              </el-col>
            </el-row>
          </div> -->
        </el-tab-pane>
        <el-tab-pane label="SEO">
          <el-row>
            <el-col :span="12">
              <el-form-item label="H1" prop="seo">
                <el-input v-model="seo.h1"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Title">
                <el-input v-model="seo.title"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="Description">
                <el-input v-model="seo.description"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-form-item label="SEO-текст">
            <Tinymce v-model="seo.text"></Tinymce>
          </el-form-item>
        </el-tab-pane>
      </el-tabs>
      <el-button
        class="succes-btn"
        type="success submit"
        @click="handleAddCourse()"
        >Создать</el-button
      >
    </el-form>
  </div>
</template>

<script>
import Tinymce from "@/components/Tinymce";
import {addSingleCourse, fetchSubCourseList } from "@/api/course";
import { required } from "vuelidate/lib/validators";
import { Message } from "element-ui";
export default {
  components: {
    Tinymce
  },
  validations: {
    course: {
      name: { required }
    },
    value: { required },
    startDate: { required },
    startRecruit: { required },
    endDate: { required }
  },
  data() {
    return {
      activeName: "first",
      labelPosition: "top",
      dialogImageUrl: "",
      dialogVisible: false,
      data: [],

      image: {},
      banner: {
        text: ""
      },

      course: {
        name: "",
        slug: "",
        content: "",
        intro_text:'',
      },
      seo: {
        title: "",
        description: "",
        seo_text: "",
        h1: ""
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "Today",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "Yesterday",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "A week ago",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      startRecruit: "",
      startDate: "",
      endDate: "",
      value: "",
      quantityPerWeek: "",
      courseTime: "",
      timeDay: "",
      timeEvening: "",
      price: "",
      totalHours: ""
    };
  },

  methods: {
    changeUpload(file) {
      this.image = file;
    },

    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
      console.log(file);
    },
    handleAddCourse() {
    

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
        name: this.course.name,
        content: this.course.content,
        intro_text:this.course.intro_text,
        title: this.seo.title,
        description: this.seo.description,
        seo_text: this.seo.text,
        h1: this.seo.h1,
        banner_text: this.banner.text,
        banner: this.image.raw,
        subcategory_id: this.$refs.select.value,
        start_recruit: this.$options.filters.parseTime(
          this.startRecruit,
          "{y}-{m}-{d}"
        ),
        start_date: this.$options.filters.parseTime(
          this.startDate,
          "{y}-{m}-{d}"
        ),
        end_date: this.$options.filters.parseTime(this.endDate, "{y}-{m}-{d}"),
        course_time: this.courseTime,
        quantity_per_week: this.quantityPerWeek,
        total_hours: this.totalHours,
        price: this.price,
        time_day: this.timeDay,
        time_evening: this.timeEvening
      };
        addSingleCourse(formData).then(() => {
          this.$router.push({ name: "course-single" });
          Message({
            message: "ресурс создан",
            type: "success",
            showClose: true
          });
        });
    },
    successUploadImg(res, file) {
      console.log(res);
      console.log(file);
    },
    getDataCourse() {
      fetchSubCourseList(this.listQuery).then(response => {
        this.data = response.data.data;
        console.log(this.data.category_id);
      });
    }
  },
  computed: {},
  mounted() {
    this.getDataCourse();
  }
};
</script>
<style lang="scss" scoped>
.el-form-item {
  .el-form-item__content {
    line-height: 30px;
  }
}

.el-row {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
  padding-left: 10px;
  padding-right: 10px;
 
}
.el-tabs__content {
  overflow: visible;
}
.succes-btn {
  margin-top: 25px;
}
.course-select {
  width: 100%;
}
.block {
  &.date-picker-wrapper {
    display: flex;
    flex-direction: column;
    .demonstration {
      margin-bottom: 20px;
    }
    .date-picker {
      width: 100%;
    }
  }
}
.input-title {
  margin-bottom: 10px;
}
.error-text {
  color: #f56c6c;
}
</style>
