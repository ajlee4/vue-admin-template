<template>
	<div class="category-container">
		<h2>Вопросы</h2>

		<router-link to="/test-question/create">
			<el-button type="primary" class="add-category-button">Создать вопрос</el-button>
		</router-link>
		<el-form :label-position="labelPosition" label-width="100px" ref="courseForm">
			<el-row>
				<el-col :span="6">
					<el-form-item label="Выбор категории">
						<el-select
							ref="selectCategory"
							v-model="category"
							placeholder="Выберите категорию"
							class="course-select"
							clearable
							@change="filterCategory"
						>
							<el-option
								v-for="item in dataCategory"
								:key="item.id"
								:label="item.name"
								:value="item.id"
							></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item label="Выбор Уровня">
						<el-select
							ref="selectGrades"
							v-model="grades"
							placeholder="Выберите уровень"
							class="course-select"
							clearable
							@change="filterCategory"
						>
							<el-option
								v-for="item in dataGrades"
								:key="item.id"
								:label="item.name"
								:value="item.id"
							></el-option>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item label="Выбор блока">
						<el-select
							ref="selectLevel"
							v-model="level"
							placeholder="Выберите блок"
							class="course-select"
							clearable
							@change="filterCategory"
						>
							<el-option
								v-for="item in dataTestLevel"
								:key="item.id"
								:label="item.name"
								:value="item.id"
							></el-option>
						</el-select>
					</el-form-item>
				</el-col>
			</el-row>
		</el-form>
		<!-- <div>
      <h3>Сортировать по:</h3>
    <el-row>
      <el-col :span="6">
        <el-form-item label="Категории">
          <el-select
            ref="selectCategory"
            v-model="category"
            placeholder="Выберите категорию"
            class="course-select"
          >
            <el-option
              v-for="item in testData"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="Уровню">
          <el-select
            ref="selectGrades"
            v-model="grades"
            placeholder="Выберите уровень"
            class="course-select"
          >
            <el-option
              v-for="item in testData"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item label="Блоку">
          <el-select
            ref="selectLevel"
            v-model="level"
            placeholder="Выберите блок"
            class="course-select"
          >
            <el-option
              v-for="item in testData"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
    </div>-->
		<div class="table-wrap">
			<el-table :data="data" border style="width: 100%" v-loading="listLoading">
				<el-table-column label="Название категории">
					<template slot-scope="scope">{{ scope.row.category.name }}</template>
				</el-table-column>
				<el-table-column label="Название Уровня">
					<template slot-scope="scope">{{ scope.row.grade.name }}</template>
				</el-table-column>
				<el-table-column label="Название Блока">
					<template slot-scope="scope">{{ scope.row.list.name }}</template>
				</el-table-column>
				<el-table-column label="Название Вопроса">
					<template slot-scope="scope">{{ scope.row.question }}</template>
				</el-table-column>
				<el-table-column align="right">
					<template slot-scope="scope">
						<router-link
							:to="{ name: 'test-question-edit', params: { id: scope.row.id } }"
							class="edit-button"
						>
							<el-button size="mini">Edit</el-button>
						</router-link>

						<el-button size="mini" type="danger" @click="handleDelete(scope.row.id)"
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
				@pagination="filterCategory()"
			></Pagination>
		</div>
	</div>
</template>

<script>
import { Pagination } from '@/components';
import {
	fetchTestQuestion,
	deleteTestQuestion,
	fetchTestCategoryList,
	fetchTestGradesList,
	fetchTestLevelList,
} from '@/api/test';
import { Message } from 'element-ui';

export default {
	components: {
		Pagination,
	},
	data() {
		return {
			id: '',
			categoryName: '',
			filteredCategory: false,
			data: [],
			filteredArr: [],
			testData: [],
			dataCategory: [],
			dataGrades: [],
			dataTestLevel: [],
			listLoading: true,
			labelPosition: 'top',
			category: '',
			level: '',
			grades: '',
			listQuery: {
				page: 1,
				limit: 20,
			},

			total: 0,
		};
	},
	computed: {
		filteredData() {
			return this.data.filter((item) => {
				return !this.category || item.category_id == this.category;
			});
		},
	},
	methods: {
		filterCategory() {
			fetchTestQuestion({
				category_id: this.category,
				grade_id: this.grades,
				list_id: this.level,
				...this.listQuery,
			}).then((res) => {
				this.total = res.data.total;
				this.data = res.data.data;
				(this.filteredCategory = true), console.log(res);
			});
		},
		handleDelete(id) {
			this.$confirm('Вы хотите удалить этот элемент?', 'Warning', {
				confirmButtonText: 'OK',
				cancelButtonText: 'Cancel',
				type: 'warning',
			})
				.then(() => {
					deleteTestQuestion(id).then(() => {
						this.data = this.data.filter((item) => item.id !== id);
						Message({
							message: 'ресурс удален',
							type: 'success',
							showClose: true,
						});
					});
				})
				.catch(() => {
					this.$message({
						type: 'info',
						message: 'Delete canceled',
						showClose: true,
					});
				});
		},

		getDataTestQuestion() {
			this.listLoading = true;

			fetchTestQuestion(this.listQuery).then((response) => {
				this.data = response.data.data;

				this.total = response.data.total;
				this.listLoading = false;
			});
			fetchTestCategoryList().then((response) => {
				this.dataCategory = response.data.data;
			});
			fetchTestGradesList().then((response) => {
				this.dataGrades = response.data.data;
			});
			fetchTestLevelList().then((response) => {
				this.dataTestLevel = response.data.data;
				console.log(this.dataTestLevel);
			});
		},
	},

	created() {
		this.getDataTestQuestion();
	},
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
.category-form-row {
	display: flex;
	align-items: flex-end;
}
.el-select {
	width: 100%;
}
.category-form {
	margin-bottom: 30px;
}
.add-category-button {
	margin-bottom: 10px;
}
</style>
