<template>
	<div>
		<h2>Редактирование ресурса</h2>
		<el-form :label-position="labelPosition" label-width="100px">
			<el-tabs type="card">
				<el-tab-pane label="Ресурс">
					<div style="margin: 20px;"></div>

					<el-row>
						<el-col :span="8">
							<el-form-item
								label="Заголовок"
								:class="{
									'is-error':
										$v.faqQuestionData.name.$dirty &&
										!$v.faqQuestionData.name.required,
								}"
							>
								<el-input type="textarea" v-model="faqQuestionData.name"></el-input>
								<small
									v-if="
										$v.faqQuestionData.name.$dirty &&
											!$v.faqQuestionData.name.required
									"
									class="error-text"
									>Поле заголовок не должно быть пустым</small
								>
							</el-form-item>
						</el-col>

						<el-col :span="8">
							<el-form-item
								label="Выбор Категории"
								:class="{
									'is-error':
										$v.faqQuestionData.category_id.$dirty &&
										!$v.faqQuestionData.category_id.required,
								}"
							>
								<el-select
									ref="select"
									v-model="faqQuestionData.category_id"
									placeholder="Выберите категорию"
									class="course-select"
								>
									<el-option
										v-for="item in faqCategoryData"
										:key="item.id"
										:label="item.name"
										:value="item.id"
									>
									</el-option>
								</el-select>
								<small
									v-if="
										$v.faqQuestionData.category_id.$dirty &&
											!$v.faqQuestionData.category_id.required
									"
									class="error-text"
									>Поле 'Выбор раздела' не должно быть пустым</small
								>
							</el-form-item>
						</el-col>
						<el-col :span="24">
							<el-form-item label="Контент">
								<tinymce v-model="faqQuestionData.content"></tinymce>
							</el-form-item>
						</el-col>
					</el-row>
				</el-tab-pane>
			</el-tabs>
			<el-button
				type="success"
				class="succes-btn"
				@click="editFaqQuestion(faqQuestionData.id)"
				>Сохранить</el-button
			>
		</el-form>
	</div>
</template>

<script>
import { Message } from 'element-ui';
import { fetchCurrentFaqQuestion, updateFaqQuestion, fetchFaqCategoryList } from '@/api/faq';
import { required } from 'vuelidate/lib/validators';
import { Tinymce } from '@/components';
export default {
	validations: {
		faqQuestionData: {
			name: { required },
			category_id: { required },
		},
	},
	components: {
		Tinymce,
	},
	data() {
		return {
			activeName: 'first',
			labelPosition: 'top',
			faqCategoryData: [],
			faqQuestionData: {
				name: '',
				content: '',
				category_id: '',
			},
		};
	},
	methods: {
		editFaqQuestion(id) {
			if (this.$v.$invalid) {
				Message({
					message: 'Заполните обязательные поля',
					type: 'error',
					showClose: true,
				});
				this.$v.$touch();
				return;
			}

			updateFaqQuestion(id, { ...this.faqQuestionData }).then(() => {
				this.$router.push({ name: 'faq-question' });
				Message({
					message: 'Ресурс обновлен',
					type: 'success',
					showClose: true,
				});
			});
		},
		getFaqCategoryData() {
			fetchFaqCategoryList().then((response) => {
				this.faqCategoryData = response.data.data;
				console.log(this.data);
			});
		},
	},
	created() {
		fetchCurrentFaqQuestion(this.$route.params.id).then((res) => {
			this.listLoading = false;
			this.faqQuestionData = res.data;
		});

		this.getFaqCategoryData();
	},
};
</script>
<style lang="scss" scoped>
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
