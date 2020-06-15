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
										$v.faqCategoryData.name.$dirty &&
										!$v.faqCategoryData.name.required,
								}"
							>
								<el-input v-model="faqCategoryData.name"></el-input>
								<small
									v-if="
										$v.faqCategoryData.name.$dirty &&
											!$v.faqCategoryData.name.required
									"
									class="error-text"
									>Поле заголовок не должно быть пустым</small
								>
							</el-form-item>
						</el-col>
						<el-col :span="8">
							<el-form-item label="Активный">
								<el-checkbox v-model="faqCategoryData.is_active"></el-checkbox>
							</el-form-item>
						</el-col>
					</el-row>
				</el-tab-pane>
			</el-tabs>
			<el-button
				type="success"
				class="succes-btn"
				@click="editFaqCategory(faqCategoryData.id)"
				>Сохранить</el-button
			>
		</el-form>
	</div>
</template>

<script>
import { Message } from 'element-ui';
import { fetchCurrentFaqCategory, updateFaqCategory } from '@/api/faq';
import { required } from 'vuelidate/lib/validators';
export default {
	validations: {
		faqCategoryData: {
			name: { required },
		},
	},
	data() {
		return {
			activeName: 'first',
			labelPosition: 'top',
			faqCategoryData: {
				name: '',
				is_active: '',
			},
		};
	},
	methods: {
		editFaqCategory(id) {
			if (this.$v.$invalid) {
				Message({
					message: 'Заполните обязательные поля',
					type: 'error',
					showClose: true,
				});
				this.$v.$touch();
				return;
			}

			updateFaqCategory(id, { ...this.faqCategoryData }).then(() => {
				this.$router.push({ name: 'faq-category' });
				Message({
					message: 'Ресурс обновлен',
					type: 'success',
					showClose: true,
				});
			});
		},
	},
	created() {
		fetchCurrentFaqCategory(this.$route.params.id).then((res) => {
			this.listLoading = false;
			this.faqCategoryData = res.data;
		});
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
