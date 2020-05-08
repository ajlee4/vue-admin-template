<template>
  <div class="course-edit-container">
    <h2>Страница редактирования</h2>
    <el-tabs type="card">
      <el-tab-pane label="Ресурс">
        <div style="margin: 20px;"></div>
        <el-form
          :label-position="labelPosition"
          label-width="100px"
          ref="courseForm"
        >
          <el-row>
            <el-col :span="12">
              <el-form-item
                label="Заголовок"
                :class="{
                  'is-error': $v.data.name.$dirty && !$v.data.name.required
                }"
              >
                <el-input v-model="data.name"></el-input>
                <small
                  v-if="$v.data.name.$dirty && !$v.data.name.required"
                  class="error-text"
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
                label="Выбор подкурса"
                :class="{
                  'is-error':
                    $v.data.subcategory_id.$dirty &&
                    !$v.data.subcategory_id.required
                }"
              >
                <el-select
                  ref="select"
                  v-model="data.subcategory_id"
                  placeholder="Select"
                  class="course-select"
                >
                  <el-option
                    v-for="item in categories"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  >
                  </el-option>
                </el-select>
                <small
                  v-if="
                    $v.data.subcategory_id.$dirty &&
                      !$v.data.subcategory_id.required
                  "
                  class="error-text"
                  >Поле 'Выбор подкурса' не должно быть пустым</small
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
                    :class="{
                      'is-error':
                        $v.data.start_recruit.$dirty &&
                        !$v.data.start_recruit.required
                    }"
                  >
                    <el-date-picker
                      class="date-picker"
                      v-model="data.start_recruit"
                      range-separator="|"
                      type="date"
                      placeholder="Начало набора"
                      format="dd-MM-yyyy"
                    >
                    </el-date-picker>
                    <small
                      v-if="
                        $v.data.start_recruit.$dirty &&
                          !$v.data.start_recruit.required
                      "
                      class="error-text"
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
                    :class="{
                      'is-error':
                        $v.data.start_date.$dirty &&
                        !$v.data.start_date.required
                    }"
                  >
                    <el-date-picker
                      class="date-picker"
                      v-model="data.start_date"
                      type="date"
                      placeholder="Начало семестра"
                      format="dd-MM-yyyy"
                    >
                    </el-date-picker>
                    <small
                      v-if="
                        $v.data.start_date.$dirty &&
                          !$v.data.start_date.required
                      "
                      class="error-text"
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
                    :class="{
                      'is-error':
                        $v.data.end_date.$dirty && !$v.data.end_date.required
                    }"
                  >
                    <el-date-picker
                      class="date-picker"
                      v-model="data.end_date"
                      type="date"
                      placeholder="Конец семестра"
                      format="dd-MM-yyyy"
                    >
                    </el-date-picker>
                    <small
                      v-if="
                        $v.data.end_date.$dirty && !$v.data.end_date.required
                      "
                      class="error-text"
                      >Поле 'Конец семестра' не должно быть пустым</small
                    >
                  </el-form-item>
                </div>
              </div></el-col
            >
          </el-row>
          <el-row :gutter="20">
            <el-col :span="6"
              ><div class="grid-content ">
                <div class="input-title">
                  Кол-во занятий в неделю
                </div>
                <el-input
                  placeholder="Введите число"
                  v-model="data.quantity_per_week"
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
                  v-model="data.course_time"
                ></el-input></div
            ></el-col>

            <el-col :span="6"
              ><div class="grid-content ">
                <div class="input-title">
                  Утро
                </div>
                <el-input
                  placeholder="Введите текст"
                  v-model="data.time_day"
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
                  v-model="data.time_evening"
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
                  v-model="data.price"
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
                  v-model="data.total_hours"
                ></el-input></div
            ></el-col>
          </el-row>
          <el-form-item label="Контент">
            <Tinymce v-model="data.content"></Tinymce>
          </el-form-item>
        </el-form>
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
                <Tinymce v-model="data.banner_text"></Tinymce>
              </div>
            </el-col>
          </el-row>
        </div> -->
      </el-tab-pane>
      <el-tab-pane label="SEO">
        <el-form
          :label-position="labelPosition"
          label-width="100px"
          ref="seoForm"
        >
          <el-row>
            <el-col :span="12">
              <el-form-item label="H1">
                <el-input v-model="data.h1"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Title">
                <el-input v-model="data.title"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="Description">
                <el-input v-model="data.description"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-form-item label="SEO-текст">
            <Tinymce v-model="data.seo_text"></Tinymce>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
    <el-button
      type="success"
      class="succes-btn"
      @click="handleCourseEdit(data.id)"
      >Изменить</el-button
    >
  </div>
</template>

<script>
import Tinymce from "@/components/Tinymce";
import { editSingleCourse } from "@/api/course";
import { required } from "vuelidate/lib/validators";
import { Message } from "element-ui";
export default {
  components: {
    Tinymce
  },
  validations: {
    data: {
      name: { required },
      subcategory_id: { required },
      start_recruit: { required },
      start_date: { required },
      end_date: { required }
    }
  },
  data() {
    return {
      activeName: "first",
      labelPosition: "top",
      dialogImageUrl: "",
      dialogVisible: false,
      categories: "",
      data: [],
      image: {},
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
      value: ""
    };
  },

  methods: {
    changeUpload(file) {
      this.image = file;
    },
    handleCourseEdit(id) {
      if (this.$v.$invalid) {
        Message({
          message: "Заполните обязательные поля",
          type: "error",
          showClose: true
        });
        this.$v.$touch();
        return;
      }
      editSingleCourse(id, this.data).then(() => {
        Message({
          message: "Ресурс изменен",
          type: "success",
          showClose: true
        });
      });
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
      console.log(file);
    },

    successUploadImg(res, file) {
      console.log(res);
      console.log(file);
    }
  },
  created() {
    this.$store
      .dispatch("getCurrentSingleCourse", this.$route.params.id)
      .then(() => {
        this.listLoading = false;
        this.categories = this.currentSingleCourse.sub_categories;
        this.data = this.currentSingleCourse.data;
      console.log(this.currentSingleCourse)
      });
  },
  computed: {
    currentSingleCourse() {
      return this.$store.getters.currentSingleCourse;
    }
  }
};
</script>
<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
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

</style>
