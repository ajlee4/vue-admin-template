<template>
	<div class="category-container">
		<h2>Все записи</h2>

		<router-link to="/without-experience/add">
			<el-button type="primary" class="add-category-button">Создать ресурс</el-button>
		</router-link>
		<el-form :label-position="labelPosition" label-width="100px" ref="courseForm">
			<el-row>
				<el-col :span="6">
					<el-form-item label="Поиск по фамилии">
						<el-input v-model="searchSurname"></el-input>
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item label="Поиск по телефону">
						<el-input v-model="searchPhone"></el-input>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<!--                <el-col :span="6">-->
				<!--                    <el-form-item label="Выбор категории">-->
				<!--                        <el-select-->
				<!--                                ref="selectCategory"-->
				<!--                                v-model="category"-->
				<!--                                placeholder="Выберите категорию"-->
				<!--                                class="course-select"-->
				<!--                                clearable-->
				<!--                                @change="filterCategory"-->
				<!--                        >-->
				<!--                            <el-option-->
				<!--                                    v-for="item in dataCategory"-->
				<!--                                    :key="item.id"-->
				<!--                                    :label="item.name"-->
				<!--                                    :value="item.id"-->
				<!--                            ></el-option>-->
				<!--                        </el-select>-->
				<!--                    </el-form-item>-->
				<!--                </el-col>-->
				<!--                <el-col :span="6">-->
				<!--                    <el-form-item label="Выбор Офиса">-->
				<!--                        <el-select-->
				<!--                                ref="selectGrades"-->
				<!--                                v-model="office"-->
				<!--                                placeholder="Выберите офис"-->
				<!--                                class="course-select"-->
				<!--                                clearable-->
				<!--                                @change="filterCategory"-->
				<!--                        >-->
				<!--                            <el-option-->
				<!--                                    v-for="item in dataOffice"-->
				<!--                                    :key="item.id"-->
				<!--                                    :label="item.address"-->
				<!--                                    :value="item.id"-->
				<!--                            ></el-option>-->
				<!--                        </el-select>-->
				<!--                    </el-form-item>-->
				<!--                </el-col>-->
				<!--                <el-col :span="6">-->
				<!--                    <el-form-item label="Поиск по фамилии">-->
				<!--                        <el-input v-model="searchSurname"></el-input>-->
				<!--                    </el-form-item>-->
				<!--                </el-col>-->
				<!--				<el-col :span="6">-->
				<!--					<el-form-item label="Поиск по телефону">-->
				<!--						<el-input v-model="searchPhone"></el-input>-->
				<!--					</el-form-item>-->
				<!--				</el-col>-->
			</el-row>
		</el-form>

		<div class="table-wrap">
			<el-table :data="filteredData" border style="width: 100%" v-loading="listLoading">
				<el-table-column label="Имя">
					<template slot-scope="scope">{{ scope.row.name }} </template>
				</el-table-column>
				<el-table-column label="Фамилия">
					<template slot-scope="scope">{{ scope.row.surname }}</template>
				</el-table-column>
				<el-table-column label="Телефон">
					<template slot-scope="scope">{{ scope.row.phone }}</template>
				</el-table-column>
				<el-table-column label="Email">
					<template slot-scope="scope">{{ scope.row.email }}</template>
				</el-table-column>

				<el-table-column align="right">
					<template slot-scope="scope">
						<router-link
							:to="{ name: 'without-experience-edit', params: { id: scope.row.id } }"
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
				@pagination="fetchWithoutExperienceList(listQuery.limit)"
			></Pagination>
		</div>
	</div>
</template>

<script>
import { Pagination } from '@/components';
import { fetchWithoutExperienceList, deleteWithoutExperience } from '@/api/withoutExperience';

import { Message } from 'element-ui';

export default {
	components: {
		Pagination,
	},
	data() {
		return {
			id: '',
			categoryName: '',
			searchSurname: '',
			searchPhone: '',
			filteredCategory: false,
			data: [],
			filteredArr: [],
			testData: [],
			dataCategory: [],
			dataOffice: [],
			dataTestLevel: [],
			listLoading: true,
			labelPosition: 'top',
			category: '',
			level: '',
			grades: '',
			office: '',
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
				if (this.searchSurname) {
					return item.surname.toLowerCase().includes(this.searchSurname.toLowerCase());
				}
				if (this.searchPhone) {
					return item.phone.toLowerCase().includes(this.searchPhone.toLowerCase());
				} else return this.data;
			});
		},
	},
	methods: {
		// filterCategory() {
		//     this.listLoading = true;
		//     getCategoryRecords({
		//         category_id: this.category,
		//         office_id: this.office,
		//
		//         ...this.listQuery,
		//     }).then((res) => {
		//         // this.total = res.data.total;
		//         this.data = res;
		//         (this.filteredCategory = true), (this.listLoading = false);
		//         console.log(res);
		//     });
		// },
		handleDelete(id) {
			this.$confirm('Вы хотите удалить этот элемент?', 'Warning', {
				confirmButtonText: 'OK',
				cancelButtonText: 'Cancel',
				type: 'warning',
			})
				.then(() => {
					deleteWithoutExperience(id).then(() => {
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

		getDataRecords() {
			this.listLoading = true;

			fetchWithoutExperienceList(this.listQuery).then((response) => {
				this.data = response.data.data;
				this.total = response.data.total;
				console.log(response);

				this.listLoading = false;
			});
		},
	},

	created() {
		this.getDataRecords();
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
