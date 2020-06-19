<template>
	<el-form :label-position="labelPosition" label-width="100px">
		<el-tabs type="card">
			<el-tab-pane label="Ресурс">
				<div style="margin: 20px;"></div>

				<el-row>
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
				</el-row>
				<el-row>
					<el-col :span="6">
						<el-form-item label="Facebook">
							<el-input v-model="data.fb"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="6">
						<el-form-item label="Instagram">
							<el-input v-model="data.insta"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="6">
						<el-form-item label="Vkontakte">
							<el-input v-model="data.vk"></el-input>
						</el-form-item>
					</el-col>
				</el-row>
				<el-form-item label="Текст отзыва">
					<Tinymce v-model="data.review"></Tinymce>
				</el-form-item>
			</el-tab-pane>
		</el-tabs>
		<el-button type="success" class="succes-btn" @click="handleUpdateReviews(data.id)"
			>Изменить</el-button
		>
	</el-form>
</template>

<script>
import { Tinymce } from '@/components';
import { updateReviews } from '@/api/reviews';
import { required } from 'vuelidate/lib/validators';
import { Message } from 'element-ui';
export default {
	components: {
		Tinymce,
	},
	validations: {
		data: {
			name: { required },
		},
	},
	data() {
		return {
			data: [],
			activeName: 'first',
			labelPosition: 'top',
			dialogImageUrl: '',
			dialogVisible: false,
			news: {
				title: '',
				slug: '',
				description: '',
			},
		};
	},
	methods: {
		handlePictureCardPreview(file) {
			this.dialogImageUrl = file.url;
			this.dialogVisible = true;
		},
		handleUpdateReviews(id) {
			if (this.$v.$invalid) {
				Message({
					message: 'Заполните обязательные поля',
					type: 'error',
					showClose: true,
				});
				this.$v.$touch();
				return;
			}
			updateReviews(id, this.data).then(() => {
				this.$router.push({ name: 'reviews' });
				this.$message({
					type: 'success',
					message: 'Отзыв изменен',
					showClose: true,
				});
			});
		},
	},
	created() {
		this.$store.dispatch('getCurrentReviews', this.$route.params.id).then(() => {
			this.listLoading = false;
			this.data = this.currentReviews;
			console.log(this.data);
		});
	},
	computed: {
		currentReviews() {
			return this.$store.getters.currentReviews;
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
