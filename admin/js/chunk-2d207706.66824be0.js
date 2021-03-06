(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
	['chunk-2d207706'],
	{
		a111: function(e, t, o) {
			'use strict';
			o.r(t);
			var i = function() {
					var e = this,
						t = e.$createElement,
						o = e._self._c || t;
					return o('div', [o('Dialog')], 1);
				},
				l = [],
				a = function() {
					var e = this,
						t = e.$createElement,
						o = e._self._c || t;
					return o(
						'div',
						[
							o(
								'el-row',
								[
									o(
										'el-button',
										{
											attrs: { type: 'text' },
											on: {
												click: function(t) {
													e.dialogVisible = !0;
												},
											},
										},
										[e._v('click to open the Dialog')],
									),
									o(
										'el-dialog',
										{
											attrs: {
												title: 'Tips',
												visible: e.dialogVisible,
												width: '30%',
												'before-close': e.handleClose,
											},
											on: {
												'update:visible': function(t) {
													e.dialogVisible = t;
												},
											},
										},
										[
											o('span', [e._v('This is a message')]),
											o(
												'span',
												{
													staticClass: 'dialog-footer',
													attrs: { slot: 'footer' },
													slot: 'footer',
												},
												[
													o(
														'el-button',
														{
															on: {
																click: function(t) {
																	e.dialogVisible = !1;
																},
															},
														},
														[e._v('Cancel')],
													),
													o(
														'el-button',
														{
															attrs: { type: 'primary' },
															on: {
																click: function(t) {
																	e.dialogVisible = !1;
																},
															},
														},
														[e._v('Confirm')],
													),
												],
												1,
											),
										],
									),
								],
								1,
							),
							o(
								'el-row',
								[
									o(
										'el-button',
										{
											attrs: { type: 'text' },
											on: {
												click: function(t) {
													e.dialogTableVisible = !0;
												},
											},
										},
										[e._v('open a Table nested Dialog')],
									),
									o(
										'el-dialog',
										{
											attrs: {
												title: 'Shipping address',
												visible: e.dialogTableVisible,
											},
											on: {
												'update:visible': function(t) {
													e.dialogTableVisible = t;
												},
											},
										},
										[
											o(
												'el-table',
												{ attrs: { data: e.gridData } },
												[
													o('el-table-column', {
														attrs: {
															property: 'date',
															label: 'Date',
															width: '150',
														},
													}),
													o('el-table-column', {
														attrs: {
															property: 'name',
															label: 'Name',
															width: '200',
														},
													}),
													o('el-table-column', {
														attrs: {
															property: 'address',
															label: 'Address',
														},
													}),
												],
												1,
											),
										],
										1,
									),
								],
								1,
							),
							o(
								'el-row',
								[
									o(
										'el-button',
										{
											attrs: { type: 'text' },
											on: {
												click: function(t) {
													e.dialogFormVisible = !0;
												},
											},
										},
										[e._v('open a Form nested Dialog')],
									),
									o(
										'el-dialog',
										{
											attrs: {
												title: 'Shipping address',
												visible: e.dialogFormVisible,
											},
											on: {
												'update:visible': function(t) {
													e.dialogFormVisible = t;
												},
											},
										},
										[
											o(
												'el-form',
												{ attrs: { model: e.form } },
												[
													o(
														'el-form-item',
														{
															attrs: {
																label: 'Promotion name',
																'label-width': e.formLabelWidth,
															},
														},
														[
															o('el-input', {
																attrs: { autocomplete: 'off' },
																model: {
																	value: e.form.name,
																	callback: function(t) {
																		e.$set(e.form, 'name', t);
																	},
																	expression: 'form.name',
																},
															}),
														],
														1,
													),
													o(
														'el-form-item',
														{
															attrs: {
																label: 'Zones',
																'label-width': e.formLabelWidth,
															},
														},
														[
															o(
																'el-select',
																{
																	attrs: {
																		placeholder:
																			'Please select a zone',
																	},
																	model: {
																		value: e.form.region,
																		callback: function(t) {
																			e.$set(
																				e.form,
																				'region',
																				t,
																			);
																		},
																		expression: 'form.region',
																	},
																},
																[
																	o('el-option', {
																		attrs: {
																			label: 'Zone No.1',
																			value: 'shanghai',
																		},
																	}),
																	o('el-option', {
																		attrs: {
																			label: 'Zone No.2',
																			value: 'beijing',
																		},
																	}),
																],
																1,
															),
														],
														1,
													),
												],
												1,
											),
											o(
												'span',
												{
													staticClass: 'dialog-footer',
													attrs: { slot: 'footer' },
													slot: 'footer',
												},
												[
													o(
														'el-button',
														{
															on: {
																click: function(t) {
																	e.dialogFormVisible = !1;
																},
															},
														},
														[e._v('Cancel')],
													),
													o(
														'el-button',
														{
															attrs: { type: 'primary' },
															on: {
																click: function(t) {
																	e.dialogFormVisible = !1;
																},
															},
														},
														[e._v('Confirm')],
													),
												],
												1,
											),
										],
										1,
									),
								],
								1,
							),
						],
						1,
					);
				},
				n = [],
				s = {
					data: function() {
						return {
							dialogVisible: !1,
							gridData: [
								{
									date: '2016-05-02',
									name: 'John Smith',
									address: 'No.1518,  Jinshajiang Road, Putuo District',
								},
								{
									date: '2016-05-04',
									name: 'John Smith',
									address: 'No.1518,  Jinshajiang Road, Putuo District',
								},
								{
									date: '2016-05-01',
									name: 'John Smith',
									address: 'No.1518,  Jinshajiang Road, Putuo District',
								},
								{
									date: '2016-05-03',
									name: 'John Smith',
									address: 'No.1518,  Jinshajiang Road, Putuo District',
								},
							],
							dialogTableVisible: !1,
							dialogFormVisible: !1,
							form: {
								name: '',
								region: '',
								date1: '',
								date2: '',
								delivery: !1,
								type: [],
								resource: '',
								desc: '',
							},
							formLabelWidth: '120px',
						};
					},
					methods: {
						handleClose: function() {
							this.$confirm('Are you sure to close this dialog?');
						},
					},
				},
				r = s,
				d = o('2877'),
				c = Object(d['a'])(r, a, n, !1, null, null, null),
				u = c.exports,
				b = { components: { Dialog: u } },
				m = b,
				f = Object(d['a'])(m, i, l, !1, null, null, null);
			t['default'] = f.exports;
		},
	},
]);
//# sourceMappingURL=chunk-2d207706.66824be0.js.map
