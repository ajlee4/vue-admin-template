(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
	['chunk-0987f2ad'],
	{
		'2ca0': function(t, e, r) {
			'use strict';
			var n = r('23e7'),
				a = r('06cf').f,
				i = r('50c4'),
				c = r('5a34'),
				o = r('1d80'),
				u = r('ab13'),
				s = r('c430'),
				f = ''.startsWith,
				l = Math.min,
				h = u('startsWith'),
				d =
					!s &&
					!h &&
					!!(function() {
						var t = a(String.prototype, 'startsWith');
						return t && !t.writable;
					})();
			n(
				{ target: 'String', proto: !0, forced: !d && !h },
				{
					startsWith: function(t) {
						var e = String(o(this));
						c(t);
						var r = i(l(arguments.length > 1 ? arguments[1] : void 0, e.length)),
							n = String(t);
						return f ? f.call(e, n, r) : e.slice(r, r + n.length) === n;
					},
				},
			);
		},
		'498a': function(t, e, r) {
			'use strict';
			var n = r('23e7'),
				a = r('58a8').trim,
				i = r('c8d2');
			n(
				{ target: 'String', proto: !0, forced: i('trim') },
				{
					trim: function() {
						return a(this);
					},
				},
			);
		},
		'501f': function(t, e, r) {},
		'5a34': function(t, e, r) {
			var n = r('44e7');
			t.exports = function(t) {
				if (n(t)) throw TypeError("The method doesn't accept regular expressions");
				return t;
			};
		},
		'6d6f': function(t, e, r) {
			'use strict';
			var n = r('501f'),
				a = r.n(n);
			a.a;
		},
		'99af': function(t, e, r) {
			'use strict';
			var n = r('23e7'),
				a = r('d039'),
				i = r('e8b5'),
				c = r('861d'),
				o = r('7b0b'),
				u = r('50c4'),
				s = r('8418'),
				f = r('65f0'),
				l = r('1dde'),
				h = r('b622'),
				d = r('2d00'),
				p = h('isConcatSpreadable'),
				m = 9007199254740991,
				b = 'Maximum allowed index exceeded',
				g =
					d >= 51 ||
					!a(function() {
						var t = [];
						return (t[p] = !1), t.concat()[0] !== t;
					}),
				v = l('concat'),
				w = function(t) {
					if (!c(t)) return !1;
					var e = t[p];
					return void 0 !== e ? !!e : i(t);
				},
				x = !g || !v;
			n(
				{ target: 'Array', proto: !0, forced: x },
				{
					concat: function(t) {
						var e,
							r,
							n,
							a,
							i,
							c = o(this),
							l = f(c, 0),
							h = 0;
						for (e = -1, n = arguments.length; e < n; e++)
							if (((i = -1 === e ? c : arguments[e]), w(i))) {
								if (((a = u(i.length)), h + a > m)) throw TypeError(b);
								for (r = 0; r < a; r++, h++) r in i && s(l, h, i[r]);
							} else {
								if (h >= m) throw TypeError(b);
								s(l, h++, i);
							}
						return (l.length = h), l;
					},
				},
			);
		},
		ab13: function(t, e, r) {
			var n = r('b622'),
				a = n('match');
			t.exports = function(t) {
				var e = /./;
				try {
					'/./'[t](e);
				} catch (r) {
					try {
						return (e[a] = !1), '/./'[t](e);
					} catch (n) {}
				}
				return !1;
			};
		},
		b0c0: function(t, e, r) {
			var n = r('83ab'),
				a = r('9bf2').f,
				i = Function.prototype,
				c = i.toString,
				o = /^\s*function ([^ (]*)/,
				u = 'name';
			!n ||
				u in i ||
				a(i, u, {
					configurable: !0,
					get: function() {
						try {
							return c.call(this).match(o)[1];
						} catch (t) {
							return '';
						}
					},
				});
		},
		bd11: function(t, e) {
			t.exports = n;
			var r = /\((?!\?)/g;
			function n(t, e, a) {
				(a = a || {}), (e = e || []);
				var i,
					c = a.strict,
					o = !1 !== a.end,
					u = a.sensitive ? '' : 'i',
					s = 0,
					f = e.length,
					l = 0,
					h = 0;
				if (t instanceof RegExp) {
					while ((i = r.exec(t.source)))
						e.push({ name: h++, optional: !1, offset: i.index });
					return t;
				}
				if (Array.isArray(t))
					return (
						(t = t.map(function(t) {
							return n(t, e, a).source;
						})),
						new RegExp('(?:' + t.join('|') + ')', u)
					);
				t = ('^' + t + (c ? '' : '/' === t[t.length - 1] ? '?' : '/?'))
					.replace(/\/\(/g, '/(?:')
					.replace(/([\/\.])/g, '\\$1')
					.replace(/(\\\/)?(\\\.)?:(\w+)(\(.*?\))?(\*)?(\?)?/g, function(
						t,
						r,
						n,
						a,
						i,
						c,
						o,
						u,
					) {
						(r = r || ''),
							(n = n || ''),
							(i = i || '([^\\/' + n + ']+?)'),
							(o = o || ''),
							e.push({ name: a, optional: !!o, offset: u + s });
						var f =
							(o ? '' : r) +
							'(?:' +
							n +
							(o ? r : '') +
							i +
							(c ? '((?:[\\/' + n + '].+?)?)' : '') +
							')' +
							o;
						return (s += f.length - t.length), f;
					})
					.replace(/\*/g, function(t, r) {
						var n = e.length;
						while (n-- > f && e[n].offset > r) e[n].offset += 3;
						return '(.*)';
					});
				while ((i = r.exec(t))) {
					var d = 0,
						p = i.index;
					while ('\\' === t.charAt(--p)) d++;
					d % 2 !== 1 &&
						((f + l === e.length || e[f + l].offset > i.index) &&
							e.splice(f + l, 0, { name: h++, optional: !1, offset: i.index }),
						l++);
				}
				return (
					(t += o ? '$' : '/' === t[t.length - 1] ? '' : '(?=\\/|$)'), new RegExp(t, u)
				);
			}
		},
		c8d2: function(t, e, r) {
			var n = r('d039'),
				a = r('5899'),
				i = '​᠎';
			t.exports = function(t) {
				return n(function() {
					return !!a[t]() || i[t]() != i || a[t].name !== t;
				});
			};
		},
		dac5: function(t, e, r) {
			'use strict';
			r.r(e);
			var n = function() {
					var t = this,
						e = t.$createElement,
						r = t._self._c || e;
					return r('div', [r('Breadcrumb')], 1);
				},
				a = [],
				i = function() {
					var t = this,
						e = t.$createElement,
						r = t._self._c || e;
					return r(
						'el-breadcrumb',
						{ staticClass: 'app-breadcrumb', attrs: { separator: '/' } },
						[
							r(
								'transition-group',
								{ attrs: { name: 'breadcrumb' } },
								t._l(t.levelList, function(e, n) {
									return r('el-breadcrumb-item', { key: e.path }, [
										'noRedirect' === e.redirect || n == t.levelList.length - 1
											? r('span', { staticClass: 'no-redirect' }, [
													t._v(t._s(e.meta.title)),
											  ])
											: r(
													'a',
													{
														on: {
															click: function(r) {
																return (
																	r.preventDefault(),
																	t.handleLink(e)
																);
															},
														},
													},
													[t._v(t._s(e.meta.title))],
											  ),
									]);
								}),
								1,
							),
						],
						1,
					);
				},
				c = [],
				o = (r('99af'), r('4de4'), r('b0c0'), r('2ca0'), r('498a'), r('bd11')),
				u = r.n(o),
				s = {
					data: function() {
						return { levelList: null };
					},
					watch: {
						$route: function(t) {
							t.path.startsWith('/redirect/') || this.getBreadcrumb();
						},
					},
					created: function() {
						this.getBreadcrumb();
					},
					methods: {
						getBreadcrumb: function() {
							var t = this.$route.matched.filter(function(t) {
									return t.meta && t.meta.title;
								}),
								e = t[0];
							this.isDashboard(e) ||
								(t = [{ path: '/', meta: { title: 'Главная' } }].concat(t)),
								(this.levelList = t.filter(function(t) {
									return t.meta && t.meta.title && !1 !== t.meta.breadcrumb;
								}));
						},
						isDashboard: function(t) {
							var e = t && t.name;
							return (
								!!e && e.trim().toLocaleLowerCase() === 'main'.toLocaleLowerCase()
							);
						},
						pathCompile: function(t) {
							var e = this.$route.params,
								r = u.a.compile(t);
							return r(e);
						},
						handleLink: function(t) {
							var e = t.redirect,
								r = t.path;
							e ? this.$router.push(e) : this.$router.push(this.pathCompile(r));
						},
					},
				},
				f = s,
				l = (r('6d6f'), r('2877')),
				h = Object(l['a'])(f, i, c, !1, null, '07776b67', null),
				d = h.exports,
				p = { components: { Breadcrumb: d } },
				m = p,
				b = Object(l['a'])(m, n, a, !1, null, null, null);
			e['default'] = b.exports;
		},
	},
]);
//# sourceMappingURL=chunk-0987f2ad.8b39d7c5.js.map
