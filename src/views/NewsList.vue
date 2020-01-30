<template>
  <div class="newslist-container">
    <h2>Новости</h2>
    <el-form label-position="top" label-width="100px" class="news-form">
      <el-row :gutter="20" align="bottom" class="news-form-row">
        <el-col :span="6"
          ><div class="grid-content ">
            <el-form-item label="Поле для поиска">
              <el-input v-model="searchData.text"></el-input>
            </el-form-item></div
        ></el-col>
        <el-col :span="6"
          ><div class="grid-content ">
            <el-form-item>
              <el-form-item label="Поле для фильтрации">
                <el-select
                  v-model="searchData.category"
                  clearable
                  placeholder="Select"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-form-item></div
        ></el-col>
        <el-col :span="6"
          ><div class="grid-content ">
            <el-form-item label="Поле для фильтрации">
              <el-select
                v-model="searchData.multipleCategory"
                multiple
                placeholder="Select"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item></div
        ></el-col>
        <el-col :span="6"><div class="grid-content "></div></el-col>
      </el-row>
      <el-button type="primary" @click="searchNews">Найти</el-button>
    </el-form>
    <router-link to="/news/create">
      <el-button type="primary" class="add-news-button"
        >Создать продукт</el-button
      >
    </router-link>
    <el-table :data="data" border style="width: 100%" v-loading="listLoading">
      <el-table-column label="Дата">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column label="Название новости">
        <template slot-scope="scope">
          {{ scope.row.alias }}
        </template>
      </el-table-column>
      <el-table-column align="right">
        <template slot-scope="scope">
          <router-link :to="newsLink" class="edit-button">
            <el-button size="mini" @click="handleEdit(scope.row.id)"
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
      @pagination="getDataNews(listQuery.limit)"
    ></pagination>
  </div>
</template>

<script>
import pagination from "@/components/Pagination";
import { fetchNewsList } from "@/api/news";
import { deleteNews } from "@/api/news";
import {searchNews} from '@/api/news'
export default {
  components: {
    pagination
  },
  data() {
    return {
      id: "",
      searchData: {
        text: "",
        category: "",
        multipleCategory: ""
      },
      data: [],
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 20
      },
      options: [
        {
          value: "Option1",
          label: "Option1"
        },
        {
          value: "Option2",
          label: "Option2"
        },
        {
          value: "Option3",
          label: "Option3"
        },
        {
          value: "Option4",
          label: "Option4"
        },
        {
          value: "Option5",
          label: "Option5"
        }
      ],
      total: 0
    };
  },
  computed: {
    newsLink() {
      return `/news/${this.id}/edit`;
    }
  },
  methods: {
    handleEdit(id) {
      this.id = id;
    },
    handleDelete(id) {
      this.$confirm("Вы хотите удалить этот элемент?", "Warning", {
        confirmButtonText: "OK",
        cancelButtonText: "Cancel",
        type: "warning"
      })
        .then(() => {
          deleteNews(id);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Delete canceled",
            showClose: true
          });
        });
    },
    getDataNews() {
      this.listLoading = true;
      fetchNewsList(this.listQuery).then(response => {
        this.data = response.data.items;
        this.total = response.data.total;
        this.listLoading = false;
      });
    },
    searchNews() {
     
      searchNews(this.searchData)

      console.log(this.searchData);
    }
  },

  mounted() {
    this.getDataNews();
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
