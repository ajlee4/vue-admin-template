<template>
	<div class="course-add-container">
		<h2>Страница создания</h2>
		<el-tabs type="card">
			<el-tab-pane label="Ресурс">
				<div style="margin: 20px;"></div>
				<el-form
					:model="course"
					:label-position="labelPosition"
					label-width="100px"
					ref="courseForm"
				>
					<el-row>
						<el-col :span="12">
							<el-form-item
								label="Заголовок"
								:class="{
									'is-error': $v.course.name.$dirty && !$v.course.name.required,
								}"
							>
								<el-input v-model="course.name"></el-input>
								<small
									v-if="$v.course.name.$dirty && !$v.course.name.required"
									class="error-text"
									>Поле заголовок не должно быть пустым</small
								>
							</el-form-item>
						</el-col>
						<el-col :span="12">
							<el-form-item label="Псевдоним">
								<el-input></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-form-item label="Вводный текст">
						<Tinymce v-model="course.intro_text"></Tinymce>
					</el-form-item>
					<el-form-item label="Контент">
						<Tinymce v-model="course.content"></Tinymce>
					</el-form-item>
				</el-form>
			</el-tab-pane>
			<el-tab-pane label="SEO">
				<el-form
					:model="seo"
					:label-position="labelPosition"
					label-width="100px"
					ref="seoForm"
				>
					<el-row>
						<el-col :span="12">
							<el-form-item label="H1">
								<el-input v-model="seo.h1"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="12">
							<el-form-item label="Title">
								<el-input v-model="seo.title"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="24">
							<el-form-item label="Description">
								<el-input v-model="seo.description"></el-input>
							</el-form-item>
						</el-col>
					</el-row>

					<el-form-item label="SEO-текст">
						<Tinymce v-model="seo.text"></Tinymce>
					</el-form-item>
				</el-form>
			</el-tab-pane>
		</el-tabs>
		<el-button type="success" class="succes-btn" @click="handleAddCourse">Создать</el-button>
	</div>
</template>

<script>
import { Tinymce } from '@/components';
import { addCourse } from '@/api/course';
import { Message } from 'element-ui';
import { required } from 'vuelidate/lib/validators';
export default {
	components: {
		Tinymce,
	},
	validations: {
		course: {
			name: { required },
		},
	},
	data() {
		return {
			activeName: 'first',
			labelPosition: 'top',
			dialogImageUrl: '',
			dialogVisible: false,
			image: {},
			banner: {
				text: '',
			},
			course: {
				name: '',
				slug: '',
				content: '',
				intro_text: '',
			},
			seo: {
				title: '',
				description: '',
				seo_text: '',
				h1: '',
			},
		};
	},
	methods: {
		changeUpload(file) {
			this.image = file;
			console.log(file);
		},

		handlePictureCardPreview(file) {
			this.dialogImageUrl = file.url;
			this.dialogVisible = true;
			console.log(file);
		},
		handleAddCourse() {
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
				name: this.course.name,
				content: this.course.content,
				intro_text: this.course.intro_text,
				title: this.seo.title,
				description: this.seo.description,
				seo_text: this.seo.text,
				h1: this.seo.h1,
				banner_text: this.banner.text,
				banner: this.image,
			};
			addCourse(formData).then(() => {
				this.$router.push({ name: 'general-course-section' });
				Message({
					message: 'ресурс создан',
					type: 'success',
					showClose: true,
				});
			});
		},
		successUploadImg(res, file) {
			console.log(res);
			console.log(file);
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
