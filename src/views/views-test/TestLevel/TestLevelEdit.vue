<template>
	<div class="category-container">
		<h2>Изменить уровень</h2>
		<el-form label-position="top" label-width="100px" class="category-form">
			<el-row :gutter="20" align="bottom" class="category-form-row">
				<el-col :span="6">
					<el-form-item
						label="Название уровня"
						:class="{
							'is-error': $v.data.name.$dirty && !$v.data.name.required,
						}"
					>
						<el-input v-model="data.name"></el-input>
						<small
							v-if="$v.data.name.$dirty && !$v.data.name.required"
							class="error-text"
							>Поле "Название уровня" не должно быть пустым</small
						>
					</el-form-item>
				</el-col>
			</el-row>
		</el-form>

		<el-button type="success" @click="editTestGrades(data.id)" class="add-category-button"
			>Изменить уровень</el-button
		>
	</div>
</template>

<script>
import { Message } from 'element-ui';
import { updateTestGrades } from '@/api/test';
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
		editTestGrades(id) {
			if (this.$v.$invalid) {
				Message({
					message: 'Заполните обязательные поля',
					type: 'error',
					showClose: true,
				});
				this.$v.$touch();
				return;
			}

			updateTestGrades(id, this.data).then(() => {
				this.$router.push({ name: 'test-level' });
				Message({
					message: 'Уровень изменен',
					type: 'success',
					showClose: true,
				});
			});
		},
	},
	created() {
		this.$store.dispatch('getTestGrades', this.$route.params.id).then(() => {
			this.listLoading = false;
			this.data = this.currentTestGrades;
			console.log(this.data);
		});
	},
	computed: {
		currentTestGrades() {
			return this.$store.getters.currentTestGrades;
		},
	},
};
</script>
