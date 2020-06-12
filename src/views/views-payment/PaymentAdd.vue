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
                label="Заголовок"
                :class="{
                  'is-error':
                    $v.paymentData.name.$dirty && !$v.paymentData.name.required,
                }"
              >
                <el-input v-model="paymentData.name"></el-input>
                <small
                  v-if="
                    $v.paymentData.name.$dirty && !$v.paymentData.name.required
                  "
                  class="error-text"
                  >Поле заголовок не должно быть пустым</small
                >
              </el-form-item>
            </el-col>

            <el-col :span="8">
              <el-form-item label="Цена">
                <el-input v-model="paymentData.price"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="Активный">
                <el-checkbox v-model="paymentData.is_active"></el-checkbox>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-button type="success" class="succes-btn" @click="addTeacher"
        >Создать</el-button
      >
    </el-form>
  </div>
</template>

<script>
import { Message } from "element-ui";
import { createPayment } from "@/api/payment";
import { required } from "vuelidate/lib/validators";

export default {
  validations: {
    paymentData: {
      name: { required },
    },
  },
  data() {
    return {
      activeName: "first",
      labelPosition: "top",

      paymentData: {
        name: "",
        price: "",
        is_active: "false",
      },
    };
  },
  methods: {
    addTeacher() {
      if (this.$v.$invalid) {
        Message({
          message: "Заполните обязательные поля",
          type: "error",
          showClose: true,
        });
        this.$v.$touch();
        return;
      }

      createPayment({ ...this.paymentData }).then(() => {
        Message({
          message: "Ресурс создан",
          type: "success",
          showClose: true,
        });
        this.$router.push({ name: "payment" });
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
