(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
	['chunk-e60507e2'],
	{
		'333d': function(t, e, n) {
			'use strict';
			var a = function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n(
						'div',
						{ staticClass: 'pagination-container', class: { hidden: t.hidden } },
						[
							n(
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
			n('a9e3');
			Math.easeInOutQuad = function(t, e, n, a) {
				return (
					(t /= a / 2),
					t < 1 ? (n / 2) * t * t + e : (t--, (-n / 2) * (t * (t - 2) - 1) + e)
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
			function s(t, e, n) {
				var a = u(),
					i = t - a,
					s = 20,
					l = 0;
				e = 'undefined' === typeof e ? 500 : e;
				var c = function t() {
					l += s;
					var u = Math.easeInOutQuad(l, a, i, e);
					r(u), l < e ? o(t) : n && 'function' === typeof n && n();
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
				d = (n('46f5'), n('2877')),
				p = Object(d['a'])(c, a, i, !1, null, '35bfa296', null);
			e['a'] = p.exports;
		},
		'46f5': function(t, e, n) {
			'use strict';
			var a = n('f372'),
				i = n.n(a);
			i.a;
		},
		'705d': function(t, e, n) {},
		'9efd': function(t, e, n) {
			'use strict';
			n.r(e);
			var a = function() {
					var t = this,
						e = t.$createElement,
						n = t._self._c || e;
					return n(
						'div',
						{ staticClass: 'category-container' },
						[
							n('h2', [t._v('Уровни')]),
							n(
								'router-link',
								{ attrs: { to: '/test-level/create' } },
								[
									n(
										'el-button',
										{
											staticClass: 'add-category-button',
											attrs: { type: 'primary' },
										},
										[t._v('Создать уровень')],
									),
								],
								1,
							),
							n(
								'div',
								{ staticClass: 'table-wrap' },
								[
									n(
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
											n('el-table-column', {
												attrs: { label: 'Название уровня' },
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
											n('el-table-column', {
												attrs: { align: 'right' },
												scopedSlots: t._u([
													{
														key: 'default',
														fn: function(e) {
															return [
																n(
																	'router-link',
																	{
																		staticClass: 'edit-button',
																		attrs: {
																			to: {
																				name:
																					'test-level-edit',
																				params: {
																					id: e.row.id,
																				},
																			},
																		},
																	},
																	[
																		n(
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
																n(
																	'el-button',
																	{
																		attrs: {
																			size: 'mini',
																			type: 'danger',
																		},
																		on: {
																			click: function(n) {
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
									n('pagination', {
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
												return t.getDataTestGrades(t.listQuery.limit);
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
				o = (n('4de4'), n('333d')),
				r = n('63a1'),
				u = n('5c96'),
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
									Object(r['g'])(t).then(function() {
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
						getDataTestGrades: function() {
							var t = this;
							(this.listLoading = !0),
								Object(r['n'])(this.listQuery).then(function(e) {
									(t.data = e.data.data),
										(t.total = e.data.total),
										(t.listLoading = !1);
								});
						},
					},
					created: function() {
						this.getDataTestGrades();
					},
				},
				l = s,
				c = (n('c0f7'), n('2877')),
				d = Object(c['a'])(l, a, i, !1, null, null, null);
			e['default'] = d.exports;
		},
		c0f7: function(t, e, n) {
			'use strict';
			var a = n('705d'),
				i = n.n(a);
			i.a;
		},
		f372: function(t, e, n) {},
	},
]);
//# sourceMappingURL=chunk-e60507e2.4b2a75bd.js.map
