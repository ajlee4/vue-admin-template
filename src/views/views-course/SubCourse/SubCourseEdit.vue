<template>
  <div class="course-edit-container">
    <h2>Страница редактирования</h2>
    <el-tabs type="card">
      <el-tab-pane label="Ресурс">
        <div style="margin: 20px;"></div>
        <el-form
          :label-position="labelPosition"
          label-width="100px"
          @submit.prevent="submitHandler"
          v-loading="listLoading"
        >
          <el-row>
            <el-col :span="12">
              <el-form-item label="Заголовок">
                <el-input v-model="currentSubCourse.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Псевдоним">
                <el-input v-model="currentSubCourse.slug"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-form-item label="Контент">
            <Tinymce v-model="currentSubCourse.content"></Tinymce>
          </el-form-item>
          <div class="img-edit">
            <h3>Редактирование изображения</h3>

            <el-row :gutter="20">
              <el-col :span="6"
                ><div class="grid-content ">
                  <h4>Загрузите изображение</h4>
                  <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
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
                  <Tinymce v-model="currentSubCourse.banner_text"></Tinymce>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="SEO">
        <el-form :label-position="labelPosition" label-width="100px">
          <el-row>
            <el-col :span="12">
              <el-form-item label="H1">
                <el-input v-model="currentSubCourse.h1"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Title">
                <el-input v-model="currentSubCourse.title"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="Description">
                <el-input v-model="currentSubCourse.description"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-form-item label="SEO-текст">
            <Tinymce v-model="currentSubCourse.seo_text"></Tinymce>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
    <el-button
      type="success"
      class="succes-btn"
      @click="handleCourseEdit(currentSubCourse.id)"
      >Изменить</el-button
    >
  </div>
</template>

<script>
import Tinymce from "@/components/Tinymce";
import { Message } from "element-ui";
import { editSubCourse } from "@/api/course";
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
      listLoading: true
    };
  },

  methods: {
    handleCourseEdit(id) {
      console.log(this.currentSubCourse);
      const formData = {
        name: this.currentSubCourse.name,
        content: this.currentSubCourse.content,
        title: this.currentSubCourse.title,
        description: this.currentSubCourse.description,
        seo_text: this.currentSubCourse.text,
        h1: this.currentSubCourse.h1
      };
     if (this.currentSubCourse.name){
        editSubCourse(id, formData).then(() => {
        Message({
          message: "Ресурс изменен",
          type: "success",
          showClose: true
        });
      });
     }
     else {
        Message({
          message: "Заголовок не может быть пустой",
          type: "error",
          showClose: true
        });
     }
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  },
  created() {
    this.$store.dispatch("getCurrentSubCourse", this.$route.params.id).then(() => {
      console.log(this.currentSubCourse)
      this.listLoading = false;
    });
  },
  computed: {
    currentSubCourse() {
      return this.$store.getters.currentSubCourse;
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
.img-edit__wrapper {
  display: flex;
  justify-content: space-between;
  margin-left: -10px;
  margin-right: -10px;
  &-left {
    width: 50%;
    padding-left: 10px;
    padding-right: 10px;
  }
  &-right {
    width: 50%;
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
