<template>
	<div class="course-add-container">
		<h2>Страница создания</h2>
		<el-form :label-position="labelPosition" label-width="100px" ref="courseForm">
			<el-tabs type="card">
				<el-tab-pane label="Ресурс">
					<div style="margin: 20px;"></div>

					<el-row>
						<el-col :span="12">
							<el-form-item
								label="Заголовок"
								:class="{
									'is-error': $v.exam.name.$dirty && !$v.exam.name.required,
								}"
							>
								<el-input v-model="exam.name"></el-input>
								<small
									v-if="$v.exam.name.$dirty && !$v.exam.name.required"
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

						<el-col :span="12">
							<el-form-item
								label="Выбор раздела"
								:class="{
									'is-error': $v.value.$dirty && !$v.value.required,
								}"
							>
								<el-select
									ref="select"
									v-model="value"
									placeholder="Select"
									class="course-select"
								>
									<el-option
										v-for="item in data"
										:key="item.id"
										:label="item.name"
										:value="item.id"
									>
									</el-option>
								</el-select>
								<small
									v-if="$v.value.$dirty && !$v.value.required"
									class="error-text"
									>Поле заголовок не должно быть пустым</small
								>
							</el-form-item>
						</el-col>
					</el-row>
					<el-form-item label="Вводный текст">
						<Tinymce v-model="exam.intro_text"></Tinymce>
					</el-form-item>
					<el-form-item label="Контент">
						<Tinymce v-model="exam.content"></Tinymce>
					</el-form-item>
					<!--
          <div class="banner-info">
            <h3>Создание баннера</h3>

            <el-row :gutter="20">
              <el-col :span="6"
                ><div class="grid-content ">
                  <h4>Загрузите изображение</h4>
                  <el-upload
                    name="banner"
                    action="http://sandbox.alkonosthim.ru/ih/api/courses/category/store"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :auto-upload="false"
                    :on-change="changeUpload"
                  >
                    <i class="el-icon-plus"></i>
                  </el-upload>
                  <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="" />
                  </el-dialog></div
              ></el-col>
              <el-col :span="18"
                ><div class="grid-content ">
                  <h4>Введите текст баннера</h4>
                  <Tinymce v-model="banner.text"></Tinymce>
                </div>
              </el-col>
            </el-row>
          </div> -->
				</el-tab-pane>
				<el-tab-pane label="SEO">
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
				</el-tab-pane>
			</el-tabs>
			<el-button type="success" class="succes-btn" @click="handleAddCourse"
				>Создать</el-button
			>
		</el-form>
	</div>
</template>

<script>
import { Tinymce } from '@/components';
import { addExam, fetchExamCategories } from '@/api/exam';
import { Message } from 'element-ui';
import { required } from 'vuelidate/lib/validators';
export default {
	components: {
		Tinymce,
	},
	validations: {
		exam: {
			name: { required },
		},
		value: { required },
	},

	data() {
		return {
			activeName: 'first',
			labelPosition: 'top',
			dialogImageUrl: '',
			dialogVisible: false,
			data: [],
			image: {},
			banner: {
				text: '',
			},
			exam: {
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

			value: '',
		};
	},

	methods: {
		changeUpload(file) {
			this.image = file;
		},

		handlePictureCardPreview(file) {
			this.dialogImageUrl = file.url;
			this.dialogVisible = true;
			console.log(file);
		},
		handleAddCourse() {
			const formData = {
				...this.seo,
				...this.exam,
				banner_text: this.banner.text,
				banner: this.image.raw,
				category_id: this.$refs.select.value,
			};
			if (this.$v.$invalid) {
				Message({
					message: 'Заполните обязательные поля',
					type: 'error',
					showClose: true,
				});
				this.$v.$touch();
				return;
			}
			addExam(formData).then(() => {
				this.$router.push({ name: 'exam' });
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
		getDataExam() {
			fetchExamCategories(this.listQuery).then((response) => {
				this.data = response.data.data;
			});
		},
	},
	mounted() {
		this.getDataExam();
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
.course-select {
	width: 100%;
}
</style>
