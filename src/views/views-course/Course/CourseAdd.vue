<template>
  <div class="course-add-container">
    <h2>Страница создания</h2>
    <el-tabs type="card">
      <el-tab-pane label="Ресурс">
        <div style="margin: 20px;"></div>
        <el-form
          :model="course"
          :label-position="labelPosition"
          label-width="100px"
          ref="courseForm"
        >
          <el-row>
            <el-col :span="12">
              <el-form-item label="Заголовок">
                <el-input v-model="course.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Псевдоним">
                <el-input></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-form-item label="Контент">
            <Tinymce v-model="course.content"></Tinymce>
          </el-form-item>
        </el-form>
        <div class="banner-info">
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
        </div>
      </el-tab-pane>
      <el-tab-pane label="SEO">
        <el-form
          :model="seo"
          :label-position="labelPosition"
          label-width="100px"
          ref="seoForm"
        >
          <el-row>
            <el-col :span="12">
              <el-form-item label="H1">
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
        </el-form>
      </el-tab-pane>
    </el-tabs>
    <el-button type="success" class="succes-btn" @click="handleAddCourse"
      >Создать</el-button
    >
  </div>
</template>

<script>
import Tinymce from "@/components/Tinymce";
import { addCourse } from "@/api/course";
import { Message } from "element-ui";
export default {
  components: {
    Tinymce
  },
  data() {
    return {
      activeName: "first",
      labelPosition: "top",
      dialogImageUrl: "",
      dialogVisible: false,
      image: {},
      banner: {
        text: ""
      },
      course: {
        name: "",
        slug: "",
        content: ""
      },
      seo: {
        title: "",
        description: "",
        seo_text: "",
        h1: ""
      }
    };
  },
  methods: {
    changeUpload(file) {
      this.image = file;
      console.log(file)
    },

    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
      console.log(file);
    },
    handleAddCourse() {
      const formData = {
        name: this.course.name,
        content: this.course.content,
        title: this.seo.title,
        description: this.seo.description,
        seo_text: this.seo.text,
        h1: this.seo.h1,
        banner_text: this.banner.text,
        banner: this.image.raw
      };
      console.log(formData);
      if (this.course.name) {
        addCourse(formData).then(() => {
          this.$router.push({ name: "general-course-section" });
          Message({
            message: "ресурс создан",
            type: "success",
            showClose: true
          });
        });
      } else {
        Message({
          message: "Заголовок не может быть пустой",
          type: "error",
          showClose: true
        });
      }
    },
    successUploadImg(res, file) {
      console.log(res);
      console.log(file);
    }
  }
};
</script>
<style lang="scss">
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
