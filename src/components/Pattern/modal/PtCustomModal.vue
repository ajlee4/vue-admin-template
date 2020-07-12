<template>
	<transition name="fade">
		<div v-show="isVisible" class="custom_modal_wrap" @click.self="$emit('close')">
			<transition name="fade">
				<div class="errorTooltip" v-if="showErr" @click="showErr = false">{{ errMsg }}</div>
			</transition>

			<div class="modal_body">
				<button class="close_btn" @click="$emit('close')">&#215;</button>
				<div class="modal_inner">
					<h1 class="tac hdr_big">{{ title }}</h1>

					<div class="input_wrap">
						<div v-for="input in inputs" :key="input.id" class="input_50 mb_20">
							<div class="custom_title">{{ input.title }}</div>
							<el-input
								v-model="formData[input.name]"
								:required="input.required"
							></el-input>
						</div>
					</div>

					<slot name="formExtend" :formData="formData"></slot>
				</div>
				<button class="submit_reg_form" @click="submit()">{{ tubmitTxt }}</button>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'customModal',
	props: {
		inputs: {
			type: Array,
			default() {
				return [
					//            {
					//              id: 1,
					//              name: 'name',
					//              title: "Имя",
					//              required: true
					//            },
					//            {
					//              id: 2,
					//              name: 'surname',
					//              title: "Фамилия",
					//              required: true
					//            },
					//            {
					//              id: 3,
					//              name: 'patronymic',
					//              title: "Отчество",
					//              required: false
					//            },
					//            {
					//              id: 4,
					//              name: 'phone',
					//              title: "Телефон",
					//              required: false
					//            },
					//            {
					//              id: 5,
					//              name: 'email',
					//              title: "E-mail",
					//              required: true
					//            },
					//            {
					//              id: 6,
					//              name: 'level',
					//              title: "Уровень",
					//              required: false
					//            }
				];
			},
		},
		title: {
			type: String,
			default: 'Default title',
		},
		tubmitTxt: {
			type: String,
			default: 'Сохранить изменения',
		},
		isVisible: {
			type: Boolean,
			dafault: false,
		},
		addFields: {
			// additional fields prop from parent
			type: Object,
			default() {
				return {};
			},
		},
		fieldsData: {
			//default field values
			type: Object,
			default() {
				return {};
			},
		},
	},
	data() {
		return {
			formValid: true,
			formData: this.addFields,
			showErr: false,
			errMsg: 'Заполните необходимые поля!',
		};
	},
	watch: {
		fieldsData: function(val) {
			//set default field values
			this.formData = val;
		},
	},
	methods: {
		submit() {
			this.formValid = true;

			// only for items in v-for loop
			if (this.$refs.inputValidate && Array.isArray(this.$refs.inputValidate)) {
				// validate inner inputs
				// check each input - if required - check notempty

				this.$refs.inputValidate.map((item) => {
					item.$el.classList.remove('invalid');
					if (item.$attrs.required && !item.value) {
						item.$el.classList.add('invalid');
						this.formValid = false;
					}
				});
			}

			if (this.formValid) {
				// emit submit to parent
				this.$emit('submit', this.formData);
			} else {
				// scroll to first invalid input
				this.showErr = true;
				setTimeout(() => (this.showErr = false), 3000);
				if (document.querySelector('.invalid')) {
					document
						.querySelector('.invalid')
						.scrollIntoView({ block: 'center', behavior: 'smooth' });
				}
			}
		},
	},
};
</script>

<style lang="scss">
%transition {
	transition: all 0.6s;
}

.custom_modal_wrap {
	position: fixed;
	z-index: 999;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;

	overflow: auto;

	background: rgba(255, 255, 255, 0.9);

	.modal_body {
		max-width: 660px;
		background: #fff;
		margin: auto;
		margin-top: 50px;
		margin-bottom: 50px;
		position: relative;

		box-shadow: 0 0 46px 0 rgba(0, 0, 0, 0.2);
	}

	.modal_inner {
		padding: 5% 11%;
	}

	.close_btn {
		font-size: 16px;
		cursor: pointer;
		width: 26px;
		height: 26px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		color: #bfbfbf;
		border: 1px solid #bfbfbf;
		background: #fff;
		border-radius: 50%;

		transition: all 0.3s;

		position: absolute;
		right: 20px;
		top: 20px;

		&:hover {
			color: #000;
			border-color: #000;
		}
	}

	.input_wrap {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

		padding-top: 10px;

		.input_50 {
			margin-bottom: 20px;
		}
	}

	.input_50 {
		flex: 0 1 47%;
	}

	.tac {
		text-align: center;
	}

	.hdr_big {
		font-size: 42px;
	}

	.mb_20 {
		margin-bottom: 20px;
	}

	.custom_title {
		font-size: 75%;
		letter-spacing: 0.04em;
		margin-bottom: 7px;
	}
	.submit_reg_form {
		font-size: 14px;
		font-weight: 800;
		cursor: pointer;
		background: #003e7e;
		color: #fff;
		width: 100%;
		border: none;
		padding: 49px 15px;
		text-align: center;
		text-transform: uppercase;

		@extend %transition;

		&:hover {
			background: #0b549e;
		}
	}

	.errorTooltip {
		position: fixed;
		z-index: 9;
		padding: 20px;

		background: #a71818;
		color: #fff;
		font-weight: 600;

		top: 50%;
		right: 50%;
		transform: translate(50%, -50%);

		cursor: pointer;
	}
}
</style>
