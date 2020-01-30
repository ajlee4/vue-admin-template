<template>
  <div>
    <el-button :plain="true" @click="open1">message</el-button>
    <el-button :plain="true" @click="open2">success</el-button>
    <el-button :plain="true" @click="open3">warning</el-button>
    <el-button :plain="true" @click="open4">error</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    open1() {
      this.$message({
        showClose: true,
        message: "This is a message."
      });
    },

    open2() {
      this.$message({
        showClose: true,
        message: "Congrats, this is a success message.",
        type: "success"
      });
    },

    open3() {
      this.$message({
        showClose: true,
        message: "Warning, this is a warning message.",
        type: "warning"
      });
    },

    open4() {
      this.$message({
        showClose: true,
        message: "Oops, this is a error message.",
        type: "error"
      });
    }
  }
};
</script>
