<template>
  <div>
    <h2>Создание товара</h2>
      <el-form
          :label-position="labelPosition"
          label-width="100px"
          :model="newsData"
        >
    <el-tabs type="card">
      <el-tab-pane label="Ресурс">
        <div style="margin: 20px;"></div>
      
          <el-row>
            <el-col :span="12">
              <el-form-item
                label="Заголовок"
                :class="{
                  'is-error':
                    $v.newsData.page_title.$dirty &&
                    !$v.newsData.page_title.required
                }"
              >
                <el-input v-model="newsData.page_title"></el-input>
                <small
                  v-if="
                    $v.newsData.page_title.$dirty &&
                      !$v.newsData.page_title.required
                  "
                  class="error-text"
                  >Поле заголовок не должно быть пустым</small
                >
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Псевдоним">
                <el-input v-model="newsData.title"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Вводный текст">
                <el-input
                
                class='textarea'
                  type="textarea"
                  :rows="5"
                  placeholder="Введите текст"
                  v-model="newsData.intro_text"
                  resize='none'
                >
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-form-item label="Контент">
            <Tinymce v-model="newsData.description"></Tinymce>
          </el-form-item>
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
       
      
      </el-tab-pane>
      <el-tab-pane label="SEO">
      
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
            <Tinymce v-model='seo.seo_text'></Tinymce>
          </el-form-item>
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
          
     
      </el-tab-pane>
    </el-tabs>
       <el-button type="success" class="succes-btn" @click="addNews"
            >Создать</el-button
          >
       </el-form>
  </div>
</template>

<script>
import Tinymce from "@/components/Tinymce";
import { Message } from "element-ui";
import { createNews } from "@/api/news";
import { required } from "vuelidate/lib/validators";
export default {
  components: {
    Tinymce
  },
  validations: {
    newsData: {
      page_title: { required }
    }
  },
  data() {
    return {
      activeName: "first",
      labelPosition: "top",
      dialogImageUrl: "",
      dialogVisible: false,
      newsData: {
        slug: null,
        page_title: "",
        intro_text: "",
        description: '',
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
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    addNews() {
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
        page_title: this.newsData.page_title,
        intro_text: this.newsData.intro_text,
        content:this.newsData.description,
        h1:this.seo.h1,
        title:this.seo.title,
        description:this.seo.description,
        seo_text:this.seo_text
      };

      createNews(formData).then(() => {
        this.$router.push({ name: "news-list" });
        Message({
          message: "Новость создана",
          type: "success",
          showClose: true
        });
      });
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


</style>
