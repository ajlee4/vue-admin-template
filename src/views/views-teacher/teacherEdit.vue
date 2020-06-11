<template>
  <div>
    <h2>Редактирование ресурса</h2>
    <el-form
      :label-position="labelPosition"
      label-width="100px"
      :model="teacherData"
    >
      <el-tabs type="card">
        <el-tab-pane label="Ресурс">
          <div style="margin: 20px;"></div>

          <el-row>
            <el-col :span="12">
              <el-form-item
                label="Имя и фамилия преподавателя"
                :class="{
                  'is-error':
                    $v.teacherData.name.$dirty && !$v.teacherData.name.required,
                }"
              >
                <el-input v-model="teacherData.name"></el-input>
                <small
                  v-if="
                    $v.teacherData.name.$dirty && !$v.teacherData.name.required
                  "
                  class="error-text"
                  >Поле заголовок не должно быть пустым</small
                >
              </el-form-item>
            </el-col>
            <!-- <el-col :span="12">
              <el-form-item label="Псевдоним">
                <el-input v-model="teacherData.title"></el-input>
              </el-form-item>
            </el-col> -->

            <el-col :span="12">
              <el-form-item label="Год начала работы">
                <el-date-picker
                  class="date-picker"
                  v-model="teacherData.works_from"
                  range-separator="|"
                  type="date"
                  placeholder="Введите дату"
                  format="dd-MM-yyyy"
                >
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="Фотография преподавателя">
                <el-image
                  style="width: 200px; height: 200px"
                  :src="url"
                ></el-image>
              </el-form-item>
            </el-col>

            <el-col :span="6">
              <el-form-item label="Добавьте фотографию">
                <el-upload
                  action="http://ih.yourstartup.by/api/lecturers/store-avatar"
                  list-type="picture-card"
                  :on-preview="handlePictureCardPreview"
                  :on-change="handlePictureCard"
                  :auto-upload="false"
                  :data="imageData"
                  ref="upload"
                  name="image"
                  :on-remove="handleRemove"
                >
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="" />
                </el-dialog>
              </el-form-item>
            </el-col>

            <el-col :span="24">
              <el-form-item label="Вводный текст">
                <Tinymce v-model="teacherData.intro_text"></Tinymce>
              </el-form-item>
            </el-col>
          </el-row>

          <el-form-item label="Контент">
            <Tinymce v-model="teacherData.content"></Tinymce>
          </el-form-item>
          <!-- <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog> -->
        </el-tab-pane>
      </el-tabs>
      <el-button
        type="success"
        class="succes-btn"
        @click="editTeacher(teacherData.id)"
        >Сохранить</el-button
      >
    </el-form>
  </div>
</template>

<script>
import Tinymce from "@/components/Tinymce";
import { Message } from "element-ui";
import { fetchTeacher, updateTeacher } from "@/api/teachers";
import { required } from "vuelidate/lib/validators";
export default {
  components: {
    Tinymce,
  },
  validations: {
    teacherData: {
      name: { required },
    },
  },
  data() {
    return {
      activeName: "first",
      labelPosition: "top",
      dialogImageUrl: "",
      dialogVisible: false,
      imageData: {},
      url: "",
      teacherData: {
        slug: null,
        name: "",
        intro_text: "",
        description: "",
        works_from: "",
      },
      seo: {
        title: "",
        description: "",
        seo_text: "",
        h1: "",
      },
    };
  },
  methods: {
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCard(file) {
      this.image = file;
    },
    editTeacher(id) {
      if (this.$v.$invalid) {
        Message({
          message: "Заполните обязательные поля",
          type: "error",
          showClose: true,
        });
        this.$v.$touch();
        return;
      }

      updateTeacher(id, this.teacherData).then(() => {
        this.$router.push({ name: "teachers" });
        this.imageData.id = id;
        this.$refs.upload.submit();
        Message({
          message: "Ресурс обновлен",
          type: "success",
          showClose: true,
        });
      });
    },
  },
  computed: {
    urlImage() {
      return `http://ih.yourstartup.by/${this.teacherData.image}`;
    },
  },
  created() {
    fetchTeacher(this.$route.params.id).then((res) => {
      this.listLoading = false;
      this.teacherData = res.data;
      this.url = `http://ih.yourstartup.by/${this.teacherData.image}`;
    });
  },
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
</style>
