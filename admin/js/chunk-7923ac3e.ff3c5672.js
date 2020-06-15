(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
	['chunk-7923ac3e'],
	{
		'7d80': function(e, l, t) {
			'use strict';
			var a = t('9a18'),
				i = t.n(a);
			i.a;
		},
		'9a18': function(e, l, t) {},
		ee3e: function(e, l, t) {
			'use strict';
			t.r(l);
			var a = function() {
					var e = this,
						l = e.$createElement,
						t = e._self._c || l;
					return t(
						'div',
						[
							t('h2', [e._v('Редактирование страниц')]),
							t(
								'el-tabs',
								{
									on: { 'tab-click': e.handleClick },
									model: {
										value: e.activeName,
										callback: function(l) {
											e.activeName = l;
										},
										expression: 'activeName',
									},
								},
								[
									t(
										'el-tab-pane',
										{ attrs: { label: 'Страница 1', name: 'first' } },
										[
											t('h3', [e._v('SEO')]),
											t(
												'el-form',
												{
													attrs: {
														'label-position': 'top',
														'label-width': '100px',
													},
												},
												[
													t(
														'el-row',
														[
															t(
																'el-col',
																{ attrs: { span: 6 } },
																[
																	t(
																		'el-form-item',
																		{
																			attrs: {
																				label: 'Title',
																			},
																		},
																		[
																			t('el-input', {
																				model: {
																					value:
																						e
																							.formLabelAlign
																							.name,
																					callback: function(
																						l,
																					) {
																						e.$set(
																							e.formLabelAlign,
																							'name',
																							l,
																						);
																					},
																					expression:
																						'formLabelAlign.name',
																				},
																			}),
																		],
																		1,
																	),
																],
																1,
															),
															t(
																'el-col',
																{ attrs: { span: 6 } },
																[
																	t(
																		'el-form-item',
																		{
																			attrs: {
																				label:
																					'Description',
																			},
																		},
																		[
																			t('el-input', {
																				model: {
																					value:
																						e
																							.formLabelAlign
																							.region,
																					callback: function(
																						l,
																					) {
																						e.$set(
																							e.formLabelAlign,
																							'region',
																							l,
																						);
																					},
																					expression:
																						'formLabelAlign.region',
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
												],
												1,
											),
											t('div', { staticClass: 'edit-page-image' }, [
												t('h3', [e._v('Изображение баннера (десктоп)')]),
												t(
													'div',
													{ staticClass: 'image-upload' },
													[
														t(
															'el-upload',
															{
																attrs: {
																	action:
																		'https://jsonplaceholder.typicode.com/posts/',
																	'list-type': 'picture-card',
																	'on-preview':
																		e.handlePictureCardPreview,
																},
															},
															[
																t('i', {
																	staticClass: 'el-icon-plus',
																}),
															],
														),
														t(
															'el-dialog',
															{
																attrs: { visible: e.dialogVisible },
																on: {
																	'update:visible': function(l) {
																		e.dialogVisible = l;
																	},
																},
															},
															[
																t('img', {
																	attrs: {
																		width: '100%',
																		src: e.dialogImageUrl,
																		alt: '',
																	},
																}),
															],
														),
													],
													1,
												),
											]),
											t('div', { staticClass: 'edit-page-image' }, [
												t('h3', [
													e._v('Изображение баннера (мобильная версия)'),
												]),
												t(
													'div',
													{ staticClass: 'image-upload' },
													[
														t(
															'el-upload',
															{
																attrs: {
																	action:
																		'https://jsonplaceholder.typicode.com/posts/',
																	'list-type': 'picture-card',
																	'on-preview':
																		e.handlePictureCardPreview,
																},
															},
															[
																t('i', {
																	staticClass: 'el-icon-plus',
																}),
															],
														),
														t(
															'el-dialog',
															{
																attrs: { visible: e.dialogVisible },
																on: {
																	'update:visible': function(l) {
																		e.dialogVisible = l;
																	},
																},
															},
															[
																t('img', {
																	attrs: {
																		width: '100%',
																		src: e.dialogImageUrl,
																		alt: '',
																	},
																}),
															],
														),
													],
													1,
												),
											]),
											t('div', { staticClass: 'section-block' }, [
												t('h3', [e._v('Название секции')]),
											]),
										],
										1,
									),
									t(
										'el-tab-pane',
										{ attrs: { label: 'Страница 2', name: 'second' } },
										[
											t('h3', [e._v('SEO')]),
											t(
												'el-form',
												{
													attrs: {
														'label-position': 'top',
														'label-width': '100px',
													},
												},
												[
													t(
														'el-row',
														[
															t(
																'el-col',
																{ attrs: { span: 6 } },
																[
																	t(
																		'el-form-item',
																		{
																			attrs: {
																				label: 'Title',
																			},
																		},
																		[t('el-input')],
																		1,
																	),
																],
																1,
															),
															t(
																'el-col',
																{ attrs: { span: 6 } },
																[
																	t(
																		'el-form-item',
																		{
																			attrs: {
																				label:
																					'Description',
																			},
																		},
																		[t('el-input')],
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
											),
										],
										1,
									),
									t(
										'el-tab-pane',
										{ attrs: { label: 'Страница 3', name: 'third' } },
										[
											t('h3', [e._v('SEO')]),
											t(
												'el-form',
												{
													attrs: {
														'label-position': 'top',
														'label-width': '100px',
													},
												},
												[
													t(
														'el-row',
														[
															t(
																'el-col',
																{ attrs: { span: 6 } },
																[
																	t(
																		'el-form-item',
																		{
																			attrs: {
																				label: 'Title',
																			},
																		},
																		[t('el-input')],
																		1,
																	),
																],
																1,
															),
															t(
																'el-col',
																{ attrs: { span: 6 } },
																[
																	t(
																		'el-form-item',
																		{
																			attrs: {
																				label:
																					'Description',
																			},
																		},
																		[t('el-input')],
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
											),
										],
										1,
									),
									t(
										'el-tab-pane',
										{ attrs: { label: 'Страница 4', name: 'fourth' } },
										[
											t('h3', [e._v('SEO')]),
											t(
												'el-form',
												{
													attrs: {
														'label-position': 'top',
														'label-width': '100px',
													},
												},
												[
													t(
														'el-row',
														[
															t(
																'el-col',
																{ attrs: { span: 6 } },
																[
																	t(
																		'el-form-item',
																		{
																			attrs: {
																				label: 'Title',
																			},
																		},
																		[t('el-input')],
																		1,
																	),
																],
																1,
															),
															t(
																'el-col',
																{ attrs: { span: 6 } },
																[
																	t(
																		'el-form-item',
																		{
																			attrs: {
																				label:
																					'Description',
																			},
																		},
																		[t('el-input')],
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
				i = [],
				s = {
					data: function() {
						return {
							activeName: 'first',
							inputExample: '',
							dialogImageUrl: '',
							dialogVisible: !1,
							formLabelAlign: { name: '', region: '', type: '' },
						};
					},
					methods: {
						handleClick: function(e, l) {
							console.log(e, l);
						},
						handlePictureCardPreview: function(e) {
							(this.dialogImageUrl = e.url), (this.dialogVisible = !0);
						},
					},
				},
				o = s,
				n = (t('7d80'), t('2877')),
				r = Object(n['a'])(o, a, i, !1, null, 'e14dc3aa', null);
			l['default'] = r.exports;
		},
	},
]);
//# sourceMappingURL=chunk-7923ac3e.ff3c5672.js.map
