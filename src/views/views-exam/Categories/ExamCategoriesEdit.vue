<template>
	<div class="course-edit-container">
		<h2>Страница редактирования</h2>
		<el-form
			:label-position="labelPosition"
			label-width="100px"
			@submit.prevent="submitHandler"
			v-loading="listLoading"
		>
			<el-tabs type="card">
				<el-tab-pane label="Ресурс">
					<div style="margin: 20px;"></div>

					<el-row>
						<el-col :span="12">
							<el-form-item
								label="Заголовок"
								:class="{
									'is-error': $v.data.name.$dirty && !$v.data.name.required,
								}"
							>
								<el-input v-model="data.name"></el-input>
								<small
									v-if="$v.data.name.$dirty && !$v.data.name.required"
									class="error-text"
									>Поле заголовок не должно быть пустым</small
								>
							</el-form-item>
						</el-col>
						<el-col :span="12">
							<el-form-item label="Псевдоним">
								<el-input v-model="data.slug"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-form-item label="Вводный текст">
						<Tinymce v-model="data.intro_text"></Tinymce>
					</el-form-item>
					<el-form-item label="Контент">
						<Tinymce v-model="data.content"></Tinymce>
					</el-form-item>
					<!-- <div class="img-edit">
            <h3>Редактирование изображения</h3>

            <el-row :gutter="20">
              <el-col :span="6"
                ><div class="grid-content ">
                  <h4>Загрузите изображение</h4>
                  <el-upload
                    action="https://jsonplaceholder.typicode.com/posts/"
                    list-type="picture-card"
                    :on-preview="handlePictureCardPreview"
                    :on-remove="handleRemove"
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
                  <Tinymce v-model="data.banner_text"></Tinymce>
                </div>
              </el-col>
            </el-row>
          </div> -->
				</el-tab-pane>
				<el-tab-pane label="SEO">
					<el-row>
						<el-col :span="12">
							<el-form-item label="H1">
								<el-input v-model="data.h1"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="12">
							<el-form-item label="Title">
								<el-input v-model="data.title"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="24">
							<el-form-item label="Description">
								<el-input v-model="data.description"></el-input>
							</el-form-item>
						</el-col>
					</el-row>

					<el-form-item label="SEO-текст">
						<Tinymce v-model="data.seo_text"></Tinymce>
					</el-form-item>
				</el-tab-pane>
			</el-tabs>
			<el-button type="success" class="succes-btn" @click="handleCourseEdit(data.id)"
				>Изменить</el-button
			>
		</el-form>
	</div>
</template>

<script>
import { Tinymce } from '@/components';
import { Message } from 'element-ui';
import { editExamCategories, fetchExamCategory } from '@/api/exam';
import { required } from 'vuelidate/lib/validators';
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
			activeName: 'first',
			labelPosition: 'top',
			dialogImageUrl: '',
			dialogVisible: false,
			listLoading: true,
			data: [],
		};
	},

	methods: {
		handleCourseEdit(id) {
			console.log(this.currentCourse);

			if (this.$v.$invalid) {
				Message({
					message: 'Заполните обязательные поля',
					type: 'error',
					showClose: true,
				});
				this.$v.$touch();
				return;
			}
			editExamCategories(id, this.data).then(() => {
				this.$router.push({ name: 'exam-categories' });
				Message({
					message: 'Ресурс изменен',
					type: 'success',
					showClose: true,
				});
			});
		},
		handleRemove(file, fileList) {
			console.log(file, fileList);
		},
		handlePictureCardPreview(file) {
			this.dialogImageUrl = file.url;
			this.dialogVisible = true;
		},
	},
	created() {
		fetchExamCategory(this.$route.params.id).then((res) => {
			this.listLoading = false;
			this.data = res.data;
			console.log(this.data);
		});
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
.img-edit__wrapper {
	display: flex;
	justify-content: space-between;
	margin-left: -10px;
	margin-right: -10px;
	&-left {
		width: 50%;
		padding-left: 10px;
		padding-right: 10px;
	}
	&-right {
		width: 50%;
		padding-left: 10px;
		padding-right: 10px;
	}
}
</style>
