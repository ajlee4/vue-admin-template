<template>
	<el-form :label-position="labelPosition" label-width="100px">
		<el-tabs type="card">
			<el-tab-pane label="Ресурс">
				<div style="margin: 20px;"></div>

				<el-row>
					<el-col :span="12">
						<el-form-item label="Категория">
							<el-select
								ref="select"
								v-model="data.category_id"
								placeholder="Select"
								class="course-select"
							>
								<el-option
									v-for="item in dataCategory"
									:key="item.id"
									:label="item.name"
									:value="item.id"
								>
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="Офис">
							<el-select
								ref="select"
								v-model="data.office_id"
								placeholder="Select"
								class="course-select"
							>
								<el-option
									v-for="item in dataOffice"
									:key="item.id"
									:label="item.address"
									:value="item.id"
								>
								</el-option>
							</el-select>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item
							label="Имя"
							:class="{
								'is-error': $v.data.name.$dirty && !$v.data.name.required,
							}"
						>
							<el-input v-model="data.name"></el-input>
							<small
								v-if="$v.data.name.$dirty && !$v.data.name.required"
								class="error-text"
								>Поле "Имя" не должно быть пустым</small
							>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="Фамилия">
							<el-input v-model="data.surname"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="Телефон">
							<el-input v-model="data.phone"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="Email">
							<el-input v-model="data.email"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="Результат теста">
							<el-input v-model="data.test_result"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="Комментарий">
							<el-input type="textarea" v-model="data.comment"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="Дата рождения">
							<el-date-picker
								class="date-picker"
								v-model="data.birth_date"
								range-separator="|"
								type="date"
								placeholder="Дата рождения"
								format="dd-MM-yyyy"
							>
							</el-date-picker>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row v-if="data.category_id == 4 || data.category_id == 9">
					<el-col :span="12">
						<el-form-item label="Имя родителя">
							<el-input v-model="data.parent_name"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="Телефон родителя">
							<el-input v-model="data.parent_phone"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="12">
						<el-form-item label="Email родителя">
							<el-input v-model="data.parent_email"></el-input>
						</el-form-item>
					</el-col>
				</el-row>

				<el-row>
					<el-col :span="6">
						<el-form-item label="Дата интервью">
							<el-date-picker
								class="date-picker"
								v-model="data.interview_date"
								range-separator="|"
								type="date"
								placeholder="Дата рождения"
								format="dd-MM-yyyy"
							>
							</el-date-picker>
						</el-form-item>
					</el-col>
					<el-col :span="6">
						<el-form-item label="Время интервью">
							<el-input v-model="data.interview_time"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
			</el-tab-pane>
		</el-tabs>
		<el-button type="success" class="succes-btn" @click="handleAddReviews(data.id)"
			>Изменить</el-button
		>
	</el-form>
</template>

<script>
import { fetchAllRecords, updateAllRecords } from '@/api/allRecords';
import { getCategory, getOffices } from '@/api/calendar';
import { required } from 'vuelidate/lib/validators';
import { Message } from 'element-ui';
export default {
	validations: {
		data: {
			name: { required },
		},
	},
	data() {
		return {
			data: {
				name: '',
			},
			activeName: 'first',
			labelPosition: 'top',
			dialogImageUrl: '',
			dialogVisible: false,
			dataCategory: '',
			dataOffice: '',
			news: {
				title: '',
				slug: '',
				description: '',
			},
		};
	},
	created() {
		this.getData();
	},
	methods: {
		handlePictureCardPreview(file) {
			this.dialogImageUrl = file.url;
			this.dialogVisible = true;
		},
		handleAddReviews(id) {
			if (this.$v.$invalid) {
				Message({
					message: 'Заполните обязательные поля',
					type: 'error',
					showClose: true,
				});
				this.$v.$touch();
				return;
			}
			updateAllRecords(id, this.data).then(() => {
				this.$router.push({ name: 'all-records' });
				this.$message({
					type: 'success',
					message: 'Данные изменены',
					showClose: true,
				});
			});
		},
		getData() {
			fetchAllRecords(this.$route.params.id).then((res) => {
				console.log(res);
				this.data = res.data;
			});
			getCategory().then((response) => {
				this.dataCategory = response;
				console.log(response);
			});
			getOffices().then((response) => {
				this.dataOffice = response;
				console.log(response);
			});
		},
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
.el-tabs__content {
	overflow: visible;
}
.succes-btn {
	margin-top: 25px;
}
</style>
