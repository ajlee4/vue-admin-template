<template>
  <el-form :label-position="labelPosition" label-width="100px">
    <el-tabs type="card">
      <el-tab-pane label="Ресурс">
        <div style="margin: 20px;"></div>

        <el-row>
          <el-col :span="12">
            <el-form-item
              label="Заголовок"
              :class="{
                'is-error':
                  $v.data.page_title.$dirty && !$v.data.page_title.required
              }"
            >
              <el-input v-model="data.page_title"></el-input>
              <small
                v-if="$v.data.page_title.$dirty && !$v.data.page_title.required"
                class="error-text"
                >Поле заголовок не должно быть пустым</small
              >
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Псевдоним">
              <el-input v-model="data.slug"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
          <el-form-item label="Текст">
          <Tinymce v-model="data.subtitle"></Tinymce>
        </el-form-item>
              <el-form-item label="Вводный текст">
            <Tinymce  v-model="data.intro_text"></Tinymce>
          </el-form-item>
        <el-form-item label="Контент">
          <Tinymce v-model="data.content"></Tinymce>
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
      <el-tab-pane label="SEO">
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
      @click="handleUpdateResourse(data.id)"
      >Изменить</el-button
    >
  </el-form>
</template>

<script>
import Tinymce from "@/components/Tinymce";
import { updateResourse } from "@/api/resourse";
import { required } from "vuelidate/lib/validators";
import { Message } from "element-ui";
export default {
  components: {
    Tinymce
  },
  validations: {
    data: {
      page_title: { required }
    }
  },
  data() {
    return {
      data: [],
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
    handleUpdateResourse(id) {
      if (this.$v.$invalid) {
        Message({
          message: "Заполните обязательные поля",
          type: "error",
          showClose: true
        });
        this.$v.$touch();
        return;
      }
      updateResourse(id, this.data).then(() => {
        this.$message({
          type: "success",
          message: "Ресурс изменен",
          showClose: true
        });
      });
    }
  },
  created() {
    this.$store
      .dispatch("getCurrentResourse", this.$route.params.id)
      .then(() => {
        this.listLoading = false;
        this.data = this.currentResourse;
        console.log(this.data);
      });
  },
  computed: {
    currentResourse() {
      return this.$store.getters.currentResourse;
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
