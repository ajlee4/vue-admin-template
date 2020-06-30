<template>
	<div class="general-course-section-container">
		<div>
			<h2>Общие разделы</h2>

			<router-link to="/exam-categories/create">
				<el-button type="primary" class="add-course-button">Создать ресурс</el-button>
			</router-link>

			<el-table :data="data" border style="width: 100%" v-loading="listLoading">
				<el-table-column label="Название курса">
					<template slot-scope="scope">
						{{ scope.row.name }}
					</template>
				</el-table-column>
				<el-table-column label="Slug">
					<template slot-scope="scope">
						{{ scope.row.slug }}
					</template>
				</el-table-column>
				<!-- <el-table-column label="Главное изображение">
                    <template slot-scope="scope">
                        {{ scope.row.alias }}
                    </template>
                </el-table-column> -->
				<el-table-column align="right">
					<template slot-scope="scope">
						<router-link
							:to="{ name: 'exam-categories-edit', params: { id: scope.row.id } }"
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
				@pagination="getDataExamCategories"
			></Pagination>
		</div>
	</div>
</template>

<script>
import { fetchExamCategories, deleteExamCategories } from '@/api/exam';
import { Message } from 'element-ui';
import { Pagination } from '@/components';
export default {
	components: {
		Pagination,
	},
	data() {
		return {
			data: [],
			listLoading: true,
			search: '',
			listQuery: {
				page: 1,
				limit: 20,
			},
			total: 0,
		};
	},
	methods: {
		getDataExamCategories() {
			this.listLoading = true;
			fetchExamCategories(this.listQuery).then((response) => {
				this.data = response.data.data;
				this.total = response.data.total;
				this.listLoading = false;
				console.log(response.data);
			});
		},
		handleDelete(id) {
			this.$confirm('Вы хотите удалить этот элемент?', 'Warning', {
				confirmButtonText: 'OK',
				cancelButtonText: 'Cancel',
				type: 'warning',
			})
				.then(() => {
					deleteExamCategories(id).then(() => {
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
	},

	mounted() {
		this.getDataExamCategories();
	},
};
</script>
<style lang="scss" scoped>
.edit-button {
	margin-right: 15px;
}
.add-course-button {
	margin-bottom: 20px;
}
</style>
