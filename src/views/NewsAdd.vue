<template>
  <div>
    <h2>Создание товара</h2>
    <el-tabs type="card">
      <el-tab-pane label="Ресурс">
        <div style="margin: 20px;"></div>
        <el-form
          :label-position="labelPosition"
          label-width="100px"
          :model="newsData"
        >
          <el-row>
            <el-col :span="12">
              <el-form-item label="Заголовок">
                <el-input v-model="newsData.slug"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Псевдоним">
                <el-input v-model="newsData.title"></el-input>
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
          <el-button type="success" class="succes-btn" @click="addNews"
            >Создать</el-button
          >
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="SEO">
        <el-form
          :label-position="labelPosition"
          label-width="100px"
          :model="newsData"
        >
          <el-row>
            <el-col :span="12">
              <el-form-item label="H1">
                <el-input v-model="newsData.h"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="Title">
                <el-input v-model="newsData.title"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="Description">
                <el-input v-model="newsData.description"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-form-item label="SEO-текст">
            <Tinymce></Tinymce>
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
          <el-button type="success" class="succes-btn">Создать</el-button>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Tinymce from "@/components/Tinymce";
import { Message } from "element-ui";
import { createNews } from "@/api/news";
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
      newsData: {
        slug: null,
        title: null,
        description: null
      }
    };
  },
  methods: {
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

    addNews() {
      if (
        !this.newsData.slug &&
        !this.newsData.title &&
        !this.newsData.description
      ) {
        Message({
          message: "Поля для заполнения не должны быть пустыми",
          type: "error",
          showClose: true
        });
      } else {
        createNews(this.newsData).then(() => {
          Message({
            message: "Страница создана",
            type: "success",
            showClose: true
          });
        });
      }
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
