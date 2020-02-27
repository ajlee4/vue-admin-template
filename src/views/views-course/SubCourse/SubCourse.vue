<template>
     <div class="course-edit-container">
    <h2>Направления</h2>
      <router-link to='/subcourse/create'>
      <el-button type="success" class="add-course-button"
        >Создать продукт</el-button
      >
 </router-link>
            <el-table :data="data" border style="width: 100%" v-loading="listLoading">
      <el-table-column label="Название курса">
        <template slot-scope="scope">
         <span class="course">
            {{ scope.row.category.name}}
         </span>
        </template>
      </el-table-column>
      <el-table-column label="Название подкурса">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="Главное изображение">
        <template slot-scope="scope">
          {{ scope.row.alias }}
        </template>
      </el-table-column>
      <el-table-column align="right">
        <template slot-scope="scope">
          <router-link :to="{ name: 'subcourse-edit', params: { id: scope.row.id } }" class="edit-button">
            <el-button size="mini"
              >Edit</el-button
            >
          </router-link>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row.id)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
        <pagination
        v-show="total > 0"
        :total="total"
        :page.sync="listQuery.page"
        :limit.sync="listQuery.limit"
        @pagination="getDataCourse"
      ></pagination>
     </div>
</template>

<script>
import { fetchSubCourseList,deleteSubCourse } from "@/api/course";
import { Message } from "element-ui";
import pagination from "@/components/Pagination";
export default {
    components: {
    pagination
  },
   data() {
    return {
      data: [],
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20
      },
      total: 0
    };
  },
    methods: {
    getDataCourse() {
      this.listLoading = true;
      fetchSubCourseList(this.listQuery).then(response => {
        this.data = response.data.data;
         this.total = response.data.total;
        this.listLoading = false;
        console.log(this.data);
      });
    },
    handleDelete(id) {
      this.$confirm("Вы хотите удалить этот элемент?", "Warning", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      })
        .then(() => {
          deleteSubCourse(id).then(() => {
            this.data = this.data.filter(item => item.id !== id);
            Message({
              message: "ресурс удален",
              type: "success",
              showClose: true
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Delete canceled",
            showClose: true
          });
        });
    }
  },
    mounted() {
    this.getDataCourse();
  }
}
</script>
<style lang="scss" scoped>
.add-course-button {
    margin-bottom: 20px;
}
.course {
  font-weight: 600;
}
.edit-button {
  margin-right: 15px;
}
</style>