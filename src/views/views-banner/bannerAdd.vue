<template>
  <div>
    <h2>Создание ресурса</h2>
    <el-form
      :label-position="labelPosition"
      label-width="100px"
    
    >
      <el-tabs type="card">
        <el-tab-pane label="Ресурс">
          <div style="margin: 20px;"></div>

          <el-row>
            <el-col :span="8">
              <el-form-item
                label="Название баннера"
                :class="{
                  'is-error':
                    $v.banner.name.$dirty &&
                    !$v.banner.name.required,
                }"
              >
                <el-input v-model="banner.name"></el-input>
                <small
                  v-if="
                    $v.banner.name.$dirty &&
                      !$v.banner.name.required
                  "
                  class="error-text"
                  >Поле заголовок не должно быть пустым</small
                >
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="Ссылка">
                <el-input v-model="banner.link"></el-input>
              </el-form-item>
            </el-col>
               <el-col :span="24">
              <el-form-item label="Активный">
               <el-checkbox v-model="banner.is_active"></el-checkbox>
              </el-form-item>
            </el-col>
              <el-col :span="12">
              <el-form-item label="Заголовок">
                <el-input v-model="banner.title"></el-input>
              </el-form-item>
            </el-col>
              <el-col :span="12">
              <el-form-item label="Подзаголовок">
                <el-input v-model="banner.subtitle"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="Изображение баннера">
                <el-upload
                  action="http://ih.yourstartup.by/api/banners/store-banner"
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
         
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-col>
          <el-button type="success" class="succes-btn" @click="addBanner"
        >Создать</el-button
      >
      </el-col>
    </el-form>
  </div>
</template>

<script>

import { Message } from "element-ui";
import { createBanner } from "@/api/banner";
import { required } from "vuelidate/lib/validators";

export default {

  validations: {
    banner: {
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
      banner: {
    
        name: "",
        link: "",
        is_active:false,
        image: "",
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
      console.log(file);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCard(file) {
      this.image = file;
    },

    addBanner() {
      if (this.$v.$invalid) {
        Message({
          message: "Заполните обязательные поля",
          type: "error",
          showClose: true,
        });
        this.$v.$touch();
        return;
      }
      const formData = {
          ...this.banner
      };

      console.log(formData);
      createBanner(formData).then((res) => {
        this.imageData.id = res.data.id;
        this.$refs.upload.submit();
        console.log(this.imageId, res.data.id, this.$refs.upload);
        Message({
          message: "Ресурс создан",
          type: "success",
          showClose: true,
        });
        this.$router.push({ name: "banner" });
      });
    },
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
