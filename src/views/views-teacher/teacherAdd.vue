<template>
	<div>
		<h2>Создание ресурса</h2>
		<el-form :label-position="labelPosition" label-width="100px" :model="teacherData">
			<el-tabs type="card">
				<el-tab-pane label="Ресурс">
					<div style="margin: 20px;"></div>

					<el-row>
						<el-col :span="12">
							<el-form-item
								label="Имя и фамилия преподавателя"
								:class="{
									'is-error':
										$v.teacherData.page_title.$dirty &&
										!$v.teacherData.page_title.required,
								}"
							>
								<el-input v-model="teacherData.page_title"></el-input>
								<small
									v-if="
										$v.teacherData.page_title.$dirty &&
											!$v.teacherData.page_title.required
									"
									class="error-text"
									>Поле заголовок не должно быть пустым</small
								>
							</el-form-item>
						</el-col>
						<!-- <el-col :span="12">
              <el-form-item label="Псевдоним">
                <el-input v-model="teacherData.title"></el-input>
              </el-form-item>
            </el-col> -->

						<el-col :span="12">
							<el-form-item label="Год начала работы">
								<el-date-picker
									class="date-picker"
									v-model="teacherData.works_from"
									range-separator="|"
									type="date"
									placeholder="Год начала работы"
									format="dd-MM-yyyy"
								>
								</el-date-picker>
							</el-form-item>
						</el-col>

						<el-col :span="12">
							<el-form-item label="Фотография преподавателя">
								<el-upload
									action="http://ih.yourstartup.by/api/lecturers/store-avatar"
									list-type="picture-card"
									:on-preview="handlePictureCardPreview"
									:on-change="handlePictureCard"
									:auto-upload="false"
									:data="imageData"
									ref="upload"
									name="image"
									:on-remove="handleRemove"
								>
									<i class="el-icon-plus"></i>
								</el-upload>
								<el-dialog :visible.sync="dialogVisible">
									<img width="100%" :src="dialogImageUrl" alt="" />
								</el-dialog>
							</el-form-item>
						</el-col>
						<el-col :span="24">
							<el-form-item label="Вводный текст">
								<Tinymce v-model="teacherData.intro_text"></Tinymce>
							</el-form-item>
						</el-col>
					</el-row>

					<el-form-item label="Контент">
						<Tinymce v-model="teacherData.content"></Tinymce>
					</el-form-item>
					<!-- <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog> -->
				</el-tab-pane>
			</el-tabs>
			<el-button type="success" class="succes-btn" @click="addTeacher">Создать</el-button>
		</el-form>
	</div>
</template>

<script>
import { Tinymce } from '@/components';
import { Message } from 'element-ui';
import { createTeacher } from '@/api/teachers';
import { required } from 'vuelidate/lib/validators';

export default {
	components: {
		Tinymce,
	},
	validations: {
		teacherData: {
			page_title: { required },
		},
	},
	data() {
		return {
			activeName: 'first',
			labelPosition: 'top',
			dialogImageUrl: '',
			dialogVisible: false,
			imageData: {},
			teacherData: {
				slug: null,
				page_title: '',
				intro_text: '',
				description: '',
				works_from: '',
				image: '',
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
		handlePictureCardPreview(file) {
			this.dialogImageUrl = file.url;
			this.dialogVisible = true;
			console.log(file);
		},
		handleRemove(file, fileList) {
			console.log(file, fileList);
		},
		handlePictureCard(file) {
			this.image = file;
		},

		addTeacher() {
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
				name: this.teacherData.page_title,
				intro_text: this.teacherData.intro_text,
				content: this.teacherData.content,
				works_from: this.$options.filters.parseTime(
					this.teacherData.works_from,
					'{y}-{m}-{d}',
				),
			};

			console.log(formData);
			createTeacher(formData).then((res) => {
				this.imageData.id = res.data.id;
				this.$refs.upload.submit();

				console.log(this.imageId, res.data.id, this.$refs.upload);
				Message({
					message: 'Ресурс создан',
					type: 'success',
					showClose: true,
				});
				this.$router.push({ name: 'teachers' });
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
