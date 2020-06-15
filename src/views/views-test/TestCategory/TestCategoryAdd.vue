<template>
	<div class="category-container">
		<h2>Добавить категорию</h2>
		<el-form label-position="top" label-width="100px" class="category-form">
			<el-row :gutter="20" align="bottom" class="category-form-row">
				<el-col :span="6">
					<el-form-item
						label="Название категории"
						:class="{
							'is-error': $v.categoryName.$dirty && !$v.categoryName.required,
						}"
					>
						<el-input v-model="categoryName"></el-input>
						<small
							v-if="$v.categoryName.$dirty && !$v.categoryName.required"
							class="error-text"
							>Поле "Название Категории" не должно быть пустым</small
						>
					</el-form-item>
				</el-col>
			</el-row>
		</el-form>

		<el-button type="success" @click="addTestCategory" class="add-category-button"
			>Добавить категорию</el-button
		>
	</div>
</template>

<script>
import { Message } from 'element-ui';
import { createTestCategory } from '@/api/test';
import { required } from 'vuelidate/lib/validators';
export default {
	validations: {
		categoryName: { required },
	},
	data() {
		return {
			categoryName: '',
		};
	},
	methods: {
		addTestCategory() {
			if (this.$v.$invalid) {
				Message({
					message: 'Заполните обязательные поля',
					type: 'error',
					showClose: true,
				});
				this.$v.$touch();
				return;
			}
			const formData = {
				name: this.categoryName,
			};

			createTestCategory(formData).then(() => {
				this.$router.push({ name: 'test-category' });
				Message({
					message: 'Категория создана',
					type: 'success',
					showClose: true,
				});
			});
		},
	},
};
</script>
