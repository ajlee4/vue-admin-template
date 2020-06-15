<template>
	<div class="newslist-container">
		<h2>Отзывы</h2>
		<router-link to="/reviews/create">
			<el-button type="success" class="add-course-button">Создать продукт</el-button>
		</router-link>
		<el-form label-position="top" label-width="100px" class="news-form" style="margin-top:20px">
			<el-row :gutter="20" align="bottom" class="news-form-row"> </el-row>
		</el-form>
		<div class="table-wrap">
			<el-table :data="data" border style="width: 100%" v-loading="listLoading">
				<el-table-column label="Дата">
					<template slot-scope="scope">
						{{ scope.row.created_at | parseTime('{d}-{m}-{y} {h}:{i}') }}
					</template>
				</el-table-column>
				<el-table-column label="Имя пользователя">
					<template slot-scope="scope">
						{{ scope.row.name }}
					</template>
				</el-table-column>
				<!-- <el-table-column label="Отзыв">
          <template slot-scope="scope">
            {{ scope.row.review }}
          </template>
        </el-table-column> -->
				<el-table-column align="right">
					<template slot-scope="scope">
						<router-link
							:to="{ name: 'reviews-edit', params: { id: scope.row.id } }"
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
				@pagination="getDataReviews(listQuery.limit)"
			></Pagination>
		</div>
	</div>
</template>

<script>
import { Pagination } from '@/components';
import { fetchReviewsList, deleteReviews } from '@/api/reviews';
import { Message } from 'element-ui';
export default {
	components: {
		Pagination,
	},
	data() {
		return {
			id: '',
			search: '',
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
		handleDelete(id) {
			this.$confirm('Вы хотите удалить этот элемент?', 'Warning', {
				confirmButtonText: 'OK',
				cancelButtonText: 'Cancel',
				type: 'warning',
			})
				.then(() => {
					deleteReviews(id).then(() => {
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
		getDataReviews() {
			this.listLoading = true;
			fetchReviewsList(this.listQuery).then((response) => {
				this.data = response.data.data;
				this.total = response.data.total;
				this.listLoading = false;
				console.log(this.data);
			});
		},
	},

	created() {
		this.getDataReviews();
	},
};
</script>

<style lang="scss">
.edit-button {
	margin-right: 15px;
}
</style>
