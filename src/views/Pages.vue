<template>
  <div>
    <h2>Редактирование страниц</h2>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="Страница 1" name="first">
        <h3>SEO</h3>
        <el-form label-position="top" label-width="100px">
         <el-row>
           <el-col :span='6'>
              <el-form-item label="Title">
            <el-input v-model='formLabelAlign.name'></el-input>
          </el-form-item>
           </el-col>
           <el-col :span="6">
              <el-form-item label="Description">
            <el-input v-model='formLabelAlign.region'></el-input>
          </el-form-item>
           </el-col>
         </el-row>
        </el-form>
      <div class="edit-page-image">
          <h3>Изображение баннера (десктоп)</h3>
          <div class="image-upload">
            <el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  >
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
          </div>
      </div>
         <div class="edit-page-image">
          <h3>Изображение баннера (мобильная версия)</h3>
          <div class="image-upload">
            <el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  >
  <i class="el-icon-plus"></i>
</el-upload>
<el-dialog :visible.sync="dialogVisible">
  <img width="100%" :src="dialogImageUrl" alt="">
</el-dialog>
          </div>
      </div>
      <div class="section-block">
        <h3>Название секции</h3>
      </div>
      </el-tab-pane>
      <el-tab-pane label="Страница 2" name="second"><h3>SEO</h3>
        <el-form label-position="top" label-width="100px">
         <el-row>
           <el-col :span='6'>
              <el-form-item label="Title">
            <el-input ></el-input>
          </el-form-item>
           </el-col>
           <el-col :span="6">
              <el-form-item label="Description">
            <el-input></el-input>
          </el-form-item>
           </el-col>
         </el-row>
        </el-form></el-tab-pane>
      <el-tab-pane label="Страница 3" name="third"><h3>SEO</h3>
        <el-form label-position="top" label-width="100px">
         <el-row>
           <el-col :span='6'>
              <el-form-item label="Title">
            <el-input></el-input>
          </el-form-item>
           </el-col>
           <el-col :span="6">
              <el-form-item label="Description">
            <el-input></el-input>
          </el-form-item>
           </el-col>
         </el-row>
        </el-form></el-tab-pane>
      <el-tab-pane label="Страница 4" name="fourth"><h3>SEO</h3>
        <el-form label-position="top" label-width="100px">
         <el-row>
           <el-col :span='6'>
              <el-form-item label="Title">
            <el-input></el-input>
          </el-form-item>
           </el-col>
           <el-col :span="6">
              <el-form-item label="Description">
            <el-input></el-input>
          </el-form-item>
           </el-col>
         </el-row>
        </el-form></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
      inputExample: '',
       dialogImageUrl: '',
        dialogVisible: false,
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
       handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
  }
};
</script>

<style lang="scss" scoped>
.el-form-item {
margin-right: 15px !important;
&:last-child {
  margin-right: 0;
}
}
</style>