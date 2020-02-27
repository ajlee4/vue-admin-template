<template>
     <div class="course-edit-container">
    <h2>Курсы</h2>
      <router-link to='/course/create'>
      <el-button type="success" class="add-course-button"
        >Создать продукт</el-button
      >
 </router-link>
            <el-table :data="data" border style="width: 100%" v-loading="listLoading">
      <el-table-column label="Название курса">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="Slug">
        <template slot-scope="scope">
          {{ scope.row.body }}
        </template>
      </el-table-column>
      <el-table-column label="Главное изображение">
        <template slot-scope="scope">
          {{ scope.row.alias }}
        </template>
      </el-table-column>
      <el-table-column align="right">
        <template slot-scope="scope">
          <router-link :to="courseLink" class="edit-button">
            <el-button size="mini"  @click="handleEdit(scope.row.id)"
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
     </div>
</template>


<style lang="scss" scoped>
.add-course-button {
    margin-bottom: 20px;
}
</style>