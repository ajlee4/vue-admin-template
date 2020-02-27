<template>
  <el-tabs type="card">
    <el-tab-pane label="Ресурс">
      <div style="margin: 20px;"></div>
      <el-form
        :label-position="labelPosition"
        label-width="100px"
        :model="news"
      >
        <el-row>
          <el-col :span="12">
            <el-form-item label="Заголовок">
              <el-input v-model="news.title"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Псевдоним">
              <el-input v-model="news.slug"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="Контент">
          <Tinymce v-model="news.description"></Tinymce>
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
        <el-button type="success" class="succes-btn" @click="handleUpdateNews"
          >Изменить</el-button
        >
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="SEO">
      <el-form
        :label-position="labelPosition"
        label-width="100px"
        :model="news"
      >
        <el-row>
          <el-col :span="12">
            <el-form-item label="H1">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Title">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="Description">
              <el-input></el-input>
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
        <el-button type="success" class="succes-btn">Изменить</el-button>
      </el-form>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import Tinymce from "@/components/Tinymce";
import { updateNews } from "@/api/news";
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
      news: {
        title: "",
        slug: "",
        description: ""
      }
    };
  },
  methods: {
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleUpdateNews() {
      updateNews(this.$route.params.id).then(() => {
        this.$message({
          type: "success",
          message: "Новость изменена",
          showClose: true
        });
      });
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
