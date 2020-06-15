<template>
	<div class="course-add-container">
		<h2>Создать вопрос</h2>
		<el-form :label-position="labelPosition" label-width="100px" ref="courseForm">
			<div style="margin: 20px;"></div>
			<el-row>
				<el-col :span="6">
					<el-form-item
						label="Выбор категории"
						:class="{
							'is-error': $v.category.$dirty && !$v.category.required,
						}"
					>
						<el-select
							ref="selectCategory"
							v-model="category"
							placeholder="Выберите категорию"
							class="course-select"
						>
							<el-option
								v-for="item in dataCategory"
								:key="item.id"
								:label="item.name"
								:value="item.id"
							></el-option>
						</el-select>
						<small v-if="$v.category.$dirty && !$v.category.required" class="error-text"
							>Поле 'Выбор категории' не должно быть пустым</small
						>
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item
						label="Выбор Уровня"
						:class="{
							'is-error': $v.grades.$dirty && !$v.grades.required,
						}"
					>
						<el-select
							ref="selectGrades"
							v-model="grades"
							placeholder="Выберите уровень"
							class="course-select"
						>
							<el-option
								v-for="item in dataGrades"
								:key="item.id"
								:label="item.name"
								:value="item.id"
							></el-option>
						</el-select>
						<small v-if="$v.grades.$dirty && !$v.grades.required" class="error-text"
							>Поле 'Выбор уровня' не должно быть пустым</small
						>
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item
						label="Выбор блока"
						:class="{
							'is-error': $v.level.$dirty && !$v.level.required,
						}"
					>
						<el-select
							ref="selectLevel"
							v-model="level"
							placeholder="Выберите блок"
							class="course-select"
						>
							<el-option
								v-for="item in dataTestLevel"
								:key="item.id"
								:label="item.name"
								:value="item.id"
							></el-option>
						</el-select>
						<small v-if="$v.grades.$dirty && !$v.grades.required" class="error-text"
							>Поле 'Выбор блока' не должно быть пустым</small
						>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<el-form-item
						label="Название вопроса"
						:class="{
							'is-error': $v.questionName.$dirty && !$v.questionName.required,
						}"
					>
						<el-input
							type="textarea"
							resize="none"
							:rows="5"
							placeholder="Введите название вопроса"
							v-model="questionName"
						></el-input>
						<small
							v-if="$v.questionName.$dirty && !$v.questionName.required"
							class="error-text"
							>Поле "Название вопроса" не должно быть пустым</small
						>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<el-alert
						title="Варианты ответов можно добавить только после создания вопроса!"
						type="warning"
						show-icon
					></el-alert>
				</el-col>
			</el-row>

			<el-button type="success" @click="handleAddQuestion" class="succes-btn"
				>Создать</el-button
			>
		</el-form>
	</div>
</template>

<script>
import {
	fetchTestGradesList,
	fetchTestCategoryList,
	fetchTestLevelList,
	createTestQuestion,
} from '@/api/test';
import { Message } from 'element-ui';
import { required } from 'vuelidate/lib/validators';
export default {
	validations: {
		questionName: { required },
		category: { required },
		grades: { required },
		level: { required },
	},

	data() {
		return {
			activeName: 'first',
			labelPosition: 'top',

			dataCategory: [],
			dataGrades: [],
			dataTestLevel: [],
			category: '',
			grades: '',
			level: '',
			questionName: '',
		};
	},

	methods: {
		handleAddQuestion() {
			const formData = {
				question: this.questionName,
				category_id: this.$refs.selectCategory.value,
				grade_id: this.$refs.selectGrades.value,
				list_id: this.$refs.selectLevel.value,
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
			createTestQuestion(formData).then((res) => {
				this.$router.push({
					name: 'test-question-edit',
					params: { id: res.data.id },
				});
				Message({
					message: 'ресурс создан',
					type: 'success',
					showClose: true,
				});
			});
		},
		getDataTest() {
			fetchTestCategoryList().then((response) => {
				this.dataCategory = response.data.data;
			});
			fetchTestGradesList().then((response) => {
				this.dataGrades = response.data.data;
			});
			fetchTestLevelList().then((response) => {
				this.dataTestLevel = response.data.data;
				console.log(this.dataTestLevel);
			});
		},
	},
	mounted() {
		this.getDataTest();
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
