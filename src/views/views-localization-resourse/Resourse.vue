<template>
  <div class="newslist-container">
    <h2>Ресурсы</h2>
    <el-form label-position="top" label-width="100px" class="news-form">
      <el-row :gutter="20" align="bottom" class="news-form-row">
        <el-col :span="6"
          ><div class="grid-content ">
            <el-form-item label="Поле для поиска">
              <el-input v-model="search"></el-input>
            </el-form-item></div
        ></el-col>
      </el-row>
      <router-link to="/resourse-localization/create">
        <el-button type="primary" class="add-resourse-button"
          >Создать ресурс</el-button
        >
      </router-link>
    </el-form>
    <div class="table-wrap">
      <el-table :data="data" border style="width: 100%" v-loading="listLoading">
        <el-table-column label="Название ресурса">
          <template slot-scope="scope">
            {{ scope.row.page_title }}
          </template>
        </el-table-column>
        <el-table-column align="right">
          <template slot-scope="scope">
            <router-link
              :to="{
                name: 'resourse-localization-edit',
                params: { id: scope.row.id },
              }"
              class="edit-button"
            >
              <el-button size="mini">Edit</el-button>
            </router-link>
          </template>
        </el-table-column>
      </el-table>
      <Pagination
        v-show="total > 0"
        :total="total"
        :page.sync="listQuery.page"
        :limit.sync="listQuery.limit"
        @pagination="getDataResourses(listQuery.limit)"
      ></Pagination>
    </div>
  </div>
</template>

<script>
import {Pagination} from "@/components";
import { fetchResourcesList } from "@/api/localization";
// import { Message } from "element-ui";
export default {
  components: {
    Pagination,
  },
  data() {
    return {
      id: "",
      search: "",
      data: [],
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20,
      },

      total: 0,
    };
  },
  computed: {
    reviewsLink() {
      return `/reviews/${this.id}/edit`;
    },
  },
  methods: {
    // handleDelete(id) {
    //   this.$confirm("Вы хотите удалить этот элемент?", "Warning", {
    //     confirmButtonText: "OK",
    //     cancelButtonText: "Cancel",
    //     type: "warning"
    //   })
    //     .then(() => {
    //       deleteReviews(id).then(() => {
    //         this.data = this.data.filter(item => item.id !== id);
    //         Message({
    //           message: "ресурс удален",
    //           type: "success",
    //           showClose: true
    //         });
    //       });
    //     })
    //     .catch(() => {
    //       this.$message({
    //         type: "info",
    //         message: "Delete canceled",
    //         showClose: true
    //       });
    //     });
    // },
    getDataResourses() {
      this.listLoading = true;
      fetchResourcesList(this.listQuery).then((response) => {
        this.data = response.data.data;
        this.total = response.data.total;
        this.listLoading = false;
        console.log(this.data);
      });
    },
  },

  created() {
    this.getDataResourses();
  },
};
</script>

<style lang="scss">
.edit-button {
  margin-right: 15px;
}
.add-resourse-button {
  margin-bottom: 20px;
}
</style>
