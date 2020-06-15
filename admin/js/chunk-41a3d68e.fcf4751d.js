(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
	['chunk-41a3d68e'],
	{
		'193a': function(t, e, a) {
			'use strict';
			a.r(e);
			var n = function() {
					var t = this,
						e = t.$createElement,
						a = t._self._c || e;
					return a(
						'div',
						{ staticClass: 'category-container' },
						[
							a('h2', [t._v('Категории')]),
							a(
								'router-link',
								{ attrs: { to: '/test-category/create' } },
								[
									a(
										'el-button',
										{
											staticClass: 'add-category-button',
											attrs: { type: 'primary' },
										},
										[t._v('Создать категорию')],
									),
								],
								1,
							),
							a(
								'div',
								{ staticClass: 'table-wrap' },
								[
									a(
										'el-table',
										{
											directives: [
												{
													name: 'loading',
													rawName: 'v-loading',
													value: t.listLoading,
													expression: 'listLoading',
												},
											],
											staticStyle: { width: '100%' },
											attrs: { data: t.data, border: '' },
										},
										[
											a('el-table-column', {
												attrs: { label: 'Название категории' },
												scopedSlots: t._u([
													{
														key: 'default',
														fn: function(e) {
															return [
																t._v(' ' + t._s(e.row.name) + ' '),
															];
														},
													},
												]),
											}),
											a('el-table-column', {
												attrs: { align: 'right' },
												scopedSlots: t._u([
													{
														key: 'default',
														fn: function(e) {
															return [
																a(
																	'router-link',
																	{
																		staticClass: 'edit-button',
																		attrs: {
																			to: {
																				name:
																					'test-category-edit',
																				params: {
																					id: e.row.id,
																				},
																			},
																		},
																	},
																	[
																		a(
																			'el-button',
																			{
																				attrs: {
																					size: 'mini',
																				},
																			},
																			[t._v('Edit')],
																		),
																	],
																	1,
																),
																a(
																	'el-button',
																	{
																		attrs: {
																			size: 'mini',
																			type: 'danger',
																		},
																		on: {
																			click: function(a) {
																				return t.handleDelete(
																					e.row.id,
																				);
																			},
																		},
																	},
																	[t._v('Delete')],
																),
															];
														},
													},
												]),
											}),
										],
										1,
									),
									a('pagination', {
										directives: [
											{
												name: 'show',
												rawName: 'v-show',
												value: t.total > 0,
												expression: 'total > 0',
											},
										],
										attrs: {
											total: t.total,
											page: t.listQuery.page,
											limit: t.listQuery.limit,
										},
										on: {
											'update:page': function(e) {
												return t.$set(t.listQuery, 'page', e);
											},
											'update:limit': function(e) {
												return t.$set(t.listQuery, 'limit', e);
											},
											pagination: function(e) {
												return t.getDataTestCategory(t.listQuery.limit);
											},
										},
									}),
								],
								1,
							),
						],
						1,
					);
				},
				i = [],
				o = (a('4de4'), a('333d')),
				r = a('63a1'),
				u = a('5c96'),
				s = {
					components: { pagination: o['a'] },
					data: function() {
						return {
							id: '',
							categoryName: '',
							data: [],
							listLoading: !0,
							listQuery: { page: 1, limit: 20 },
							total: 0,
						};
					},
					methods: {
						handleDelete: function(t) {
							var e = this;
							this.$confirm('Вы хотите удалить этот элемент?', 'Warning', {
								confirmButtonText: 'OK',
								cancelButtonText: 'Cancel',
								type: 'warning',
							})
								.then(function() {
									Object(r['f'])(t).then(function() {
										(e.data = e.data.filter(function(e) {
											return e.id !== t;
										})),
											Object(u['Message'])({
												message: 'ресурс удален',
												type: 'success',
												showClose: !0,
											});
									});
								})
								.catch(function() {
									e.$message({
										type: 'info',
										message: 'Delete canceled',
										showClose: !0,
									});
								});
						},
						getDataTestCategory: function() {
							var t = this;
							(this.listLoading = !0),
								Object(r['m'])(this.listQuery).then(function(e) {
									(t.data = e.data.data),
										(t.total = e.data.total),
										(t.listLoading = !1);
								});
						},
					},
					created: function() {
						this.getDataTestCategory();
					},
				},
				l = s,
				c = (a('8587'), a('2877')),
				d = Object(c['a'])(l, n, i, !1, null, null, null);
			e['default'] = d.exports;
		},
		'333d': function(t, e, a) {
			'use strict';
			var n = function() {
					var t = this,
						e = t.$createElement,
						a = t._self._c || e;
					return a(
						'div',
						{ staticClass: 'pagination-container', class: { hidden: t.hidden } },
						[
							a(
								'el-pagination',
								t._b(
									{
										attrs: {
											background: t.background,
											'current-page': t.currentPage,
											'page-size': t.pageSize,
											layout: t.layout,
											'page-sizes': t.pageSizes,
											total: t.total,
										},
										on: {
											'update:currentPage': function(e) {
												t.currentPage = e;
											},
											'update:current-page': function(e) {
												t.currentPage = e;
											},
											'update:pageSize': function(e) {
												t.pageSize = e;
											},
											'update:page-size': function(e) {
												t.pageSize = e;
											},
											'size-change': t.handleSizeChange,
											'current-change': t.handleCurrentChange,
										},
									},
									'el-pagination',
									t.$attrs,
									!1,
								),
							),
						],
						1,
					);
				},
				i = [];
			a('a9e3');
			Math.easeInOutQuad = function(t, e, a, n) {
				return (
					(t /= n / 2),
					t < 1 ? (a / 2) * t * t + e : (t--, (-a / 2) * (t * (t - 2) - 1) + e)
				);
			};
			var o = (function() {
				return (
					window.requestAnimationFrame ||
					window.webkitRequestAnimationFrame ||
					window.mozRequestAnimationFrame ||
					function(t) {
						window.setTimeout(t, 1e3 / 60);
					}
				);
			})();
			function r(t) {
				(document.documentElement.scrollTop = t),
					(document.body.parentNode.scrollTop = t),
					(document.body.scrollTop = t);
			}
			function u() {
				return (
					document.documentElement.scrollTop ||
					document.body.parentNode.scrollTop ||
					document.body.scrollTop
				);
			}
			function s(t, e, a) {
				var n = u(),
					i = t - n,
					s = 20,
					l = 0;
				e = 'undefined' === typeof e ? 500 : e;
				var c = function t() {
					l += s;
					var u = Math.easeInOutQuad(l, n, i, e);
					r(u), l < e ? o(t) : a && 'function' === typeof a && a();
				};
				c();
			}
			var l = {
					name: 'Pagination',
					props: {
						total: { required: !0, type: Number },
						page: { type: Number, default: 1 },
						limit: { type: Number, default: 20 },
						pageSizes: {
							type: Array,
							default: function() {
								return [2, 10, 20, 30, 50, 100];
							},
						},
						layout: {
							type: String,
							default: 'total, sizes, prev, pager, next, jumper',
						},
						background: { type: Boolean, default: !0 },
						autoScroll: { type: Boolean, default: !1 },
						hidden: { type: Boolean, default: !1 },
					},
					computed: {
						currentPage: {
							get: function() {
								return this.page;
							},
							set: function(t) {
								this.$emit('update:page', t);
							},
						},
						pageSize: {
							get: function() {
								return this.limit;
							},
							set: function(t) {
								this.$emit('update:limit', t);
							},
						},
					},
					methods: {
						handleSizeChange: function(t) {
							this.$emit('pagination', { page: this.currentPage, limit: t }),
								this.autoScroll && s(0, 800);
						},
						handleCurrentChange: function(t) {
							this.$emit('pagination', { page: t, limit: this.pageSize }),
								this.autoScroll && s(0, 800);
						},
					},
				},
				c = l,
				d = (a('46f5'), a('2877')),
				p = Object(d['a'])(c, n, i, !1, null, '35bfa296', null);
			e['a'] = p.exports;
		},
		'46f5': function(t, e, a) {
			'use strict';
			var n = a('f372'),
				i = a.n(n);
			i.a;
		},
		8587: function(t, e, a) {
			'use strict';
			var n = a('e65a'),
				i = a.n(n);
			i.a;
		},
		e65a: function(t, e, a) {},
		f372: function(t, e, a) {},
	},
]);
//# sourceMappingURL=chunk-41a3d68e.fcf4751d.js.map
