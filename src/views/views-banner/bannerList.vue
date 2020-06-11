<template>
  <div class="newslist-container">
    <h2>Баннеры</h2>
    <el-form label-position="top" label-width="100px" class="news-form">
      <el-row :gutter="20" align="bottom" class="news-form-row">
      </el-row>
    </el-form>
    <router-link to="/banner/create">
      <el-button type="primary" class="add-news-button"
        >Создать продукт</el-button
      >
    </router-link>
    <div class="table-wrap">
      <el-table
        :data="data"
        border
        style="width: 100%"
        v-loading="listLoading"
      >
        <el-table-column label="Имя">
          <template slot-scope="scope">
           {{scope.row.name}}
          </template>
        </el-table-column>
     
        <el-table-column align="right">
          <template slot-scope="scope">
               <router-link
              :to="{ name: 'banner-edit', params: { id: scope.row.id } }"
              class="edit-button"
            >
              <el-button size="mini">Edit</el-button>
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
      <Pagination
        v-show="total > 0"
        :total="total"
        :page.sync="listQuery.page"
        :limit.sync="listQuery.limit"
        @pagination="getDataBanner(listQuery.limit)"
      ></Pagination>
    </div>
  </div>
</template>

<script>
import {Pagination} from "@/components";
import { fetchBannerList, deleteBanner } from "@/api/banner";
import { Message } from "element-ui";
export default {
  components: {
    Pagination
  },
  data() {
    return {
      id: "",
      search: "",
      data: [],
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20
      },

      total: 0
    };
  },
  computed: {
    newsLink() {
      return `/news/${this.id}/edit`;
    },

  },
  methods: {
    handleDelete(id) {
      this.$confirm("Вы хотите удалить этот элемент?", "Warning", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      })
        .then(() => {
          deleteBanner(id).then(() => {
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
    },
    getDataBanner() {
      this.listLoading = true;
      fetchBannerList(this.listQuery).then(response => {
        this.data = response.data.data;
        this.total = response.data.total;
        this.listLoading = false;
        console.log(this.data);
      });
    }
    // searchNews() {
    //   searchNews(this.searchData);
    //   console.log(this.searchData);
    // }
  },

  created() {
    this.getDataBanner();
  }
};
</script>

<style lang="scss">
.el-table__row {
  cursor: pointer;
}
.el-table__empty-block {
  display: none !important;
}
.edit-button {
  margin-right: 15px;
}
.el-pagination {
  margin-top: 30px;
}
.news-form-row {
  display: flex;
  align-items: flex-end;
}
.el-select {
  width: 100%;
}
.news-form {
  margin-bottom: 30px;
}
.add-news-button {
  margin-bottom: 10px;
}
</style>
