<template>
	<div class="category-container">
		<h2>Категории</h2>

		<router-link to="/test-category/create">
			<el-button type="primary" class="add-category-button">Создать категорию</el-button>
		</router-link>
		<div class="table-wrap">
			<el-table :data="data" border style="width: 100%" v-loading="listLoading">
				<el-table-column label="Название категории">
					<template slot-scope="scope">
						{{ scope.row.name }}
					</template>
				</el-table-column>
				<el-table-column align="right">
					<template slot-scope="scope">
						<router-link
							:to="{ name: 'test-category-edit', params: { id: scope.row.id } }"
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
				@pagination="getDataTestCategory(listQuery.limit)"
			></Pagination>
		</div>
	</div>
</template>

<script>
import { Pagination } from '@/components';
import { fetchTestCategoryList, deleteTestCategory } from '@/api/test';
import { Message } from 'element-ui';

export default {
	components: {
		Pagination,
	},
	data() {
		return {
			id: '',
			categoryName: '',
			data: [],
			listLoading: true,

			listQuery: {
				page: 1,
				limit: 20,
			},

			total: 0,
		};
	},
	methods: {
		handleDelete(id) {
			this.$confirm('Вы хотите удалить этот элемент?', 'Warning', {
				confirmButtonText: 'OK',
				cancelButtonText: 'Cancel',
				type: 'warning',
			})
				.then(() => {
					deleteTestCategory(id).then(() => {
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

		getDataTestCategory() {
			this.listLoading = true;
			fetchTestCategoryList(this.listQuery).then((response) => {
				this.data = response.data.data;
				this.total = response.data.total;
				console.log(this.data);
				this.listLoading = false;
			});
		},
	},

	created() {
		this.getDataTestCategory();
	},
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
