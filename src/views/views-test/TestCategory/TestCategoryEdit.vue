<template>
	<div class="category-container">
		<h2>Изменить категорию</h2>
		<el-form label-position="top" label-width="100px" class="category-form">
			<el-row :gutter="20" align="bottom" class="category-form-row">
				<el-col :span="6">
					<el-form-item
						label="Название категории"
						:class="{
							'is-error': $v.data.name.$dirty && !$v.data.name.required,
						}"
					>
						<el-input v-model="data.name"></el-input>
						<small
							v-if="$v.data.name.$dirty && !$v.data.name.required"
							class="error-text"
							>Поле "Название Категории" не должно быть пустым</small
						>
					</el-form-item>
				</el-col>
			</el-row>
		</el-form>

		<el-button type="success" @click="editTestCategory(data.id)" class="add-category-button"
			>Изменить категорию</el-button
		>
	</div>
</template>

<script>
import { Message } from 'element-ui';
import { updateTestCategory } from '@/api/test';
import { required } from 'vuelidate/lib/validators';
export default {
	validations: {
		data: {
			name: { required },
		},
	},
	data() {
		return {
			data: [],
		};
	},
	methods: {
		editTestCategory(id) {
			if (this.$v.$invalid) {
				Message({
					message: 'Заполните обязательные поля',
					type: 'error',
					showClose: true,
				});
				this.$v.$touch();
				return;
			}

			updateTestCategory(id, this.data).then(() => {
				this.$router.push({ name: 'test-category' });
				Message({
					message: 'Категория изменена',
					type: 'success',
					showClose: true,
				});
			});
		},
	},
	created() {
		this.$store.dispatch('getTestCategory', this.$route.params.id).then(() => {
			this.listLoading = false;
			this.data = this.currentTestCategory;
			console.log(this.data);
		});
	},
	computed: {
		currentTestCategory() {
			return this.$store.getters.currentTestCategory;
		},
	},
};
</script>
