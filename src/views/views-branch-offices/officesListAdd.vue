<template>
	<div>
		<h2>Создание ресурса</h2>
		<el-form :label-position="labelPosition" label-width="100px" :model="office">
			<el-tabs type="card">
				<el-tab-pane label="Ресурс">
					<div style="margin: 20px;"></div>

					<el-row>
						<el-col :span="12">
							<el-form-item
								label="Адрес филиала"
								:class="{
									'is-error':
										$v.office.address.$dirty && !$v.office.address.required,
								}"
							>
								<el-input v-model="office.address"></el-input>
								<small
									v-if="$v.office.address.$dirty && !$v.office.address.required"
									class="error-text"
									>Поле Адрес не должно быть пустым</small
								>
							</el-form-item>
						</el-col>

						<el-col :span="12">
							<el-form-item label="Активность">
								<el-checkbox v-model="office.is_active"></el-checkbox>
							</el-form-item>
						</el-col>
					</el-row>
					<el-form-item label="Контент">
						<Tinymce v-model="office.content"></Tinymce>
					</el-form-item>
				</el-tab-pane>
			</el-tabs>
			<el-button type="success" class="succes-btn" @click="addOffice">Создать</el-button>
		</el-form>
	</div>
</template>

<script>
import { Tinymce } from '@/components';
import { Message } from 'element-ui';
import { createOffices } from '@/api/branchOffices';
import { required } from 'vuelidate/lib/validators';

export default {
	components: {
		Tinymce,
	},
	validations: {
		office: {
			address: { required },
		},
	},
	data() {
		return {
			activeName: 'first',
			labelPosition: 'top',
			office: {
				address: '',
				is_active: '',
				content: '',
			},
		};
	},
	methods: {
		addOffice() {
			if (this.$v.$invalid) {
				Message({
					message: 'Заполните обязательные поля',
					type: 'error',
					showClose: true,
				});
				this.$v.$touch();
				return;
			}

			createOffices(this.office).then(() => {
				Message({
					message: 'Ресурс создан',
					type: 'success',
					showClose: true,
				});
				this.$router.push({ name: 'branch-offices' });
			});
		},
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
