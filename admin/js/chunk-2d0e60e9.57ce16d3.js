(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
	['chunk-2d0e60e9'],
	{
		'96b8': function(s, e, n) {
			'use strict';
			n.r(e);
			var t = function() {
					var s = this,
						e = s.$createElement,
						n = s._self._c || e;
					return n('div', [n('Messages')], 1);
				},
				o = [],
				a = function() {
					var s = this,
						e = s.$createElement,
						n = s._self._c || e;
					return n(
						'div',
						[
							n('el-button', { attrs: { plain: !0 }, on: { click: s.open1 } }, [
								s._v('message'),
							]),
							n('el-button', { attrs: { plain: !0 }, on: { click: s.open2 } }, [
								s._v('success'),
							]),
							n('el-button', { attrs: { plain: !0 }, on: { click: s.open3 } }, [
								s._v('warning'),
							]),
							n('el-button', { attrs: { plain: !0 }, on: { click: s.open4 } }, [
								s._v('error'),
							]),
						],
						1,
					);
				},
				i = [],
				l = {
					methods: {
						open1: function() {
							this.$message({ showClose: !0, message: 'This is a message.' });
						},
						open2: function() {
							this.$message({
								showClose: !0,
								message: 'Congrats, this is a success message.',
								type: 'success',
							});
						},
						open3: function() {
							this.$message({
								showClose: !0,
								message: 'Warning, this is a warning message.',
								type: 'warning',
							});
						},
						open4: function() {
							this.$message({
								showClose: !0,
								message: 'Oops, this is a error message.',
								type: 'error',
							});
						},
					},
				},
				c = l,
				r = n('2877'),
				u = Object(r['a'])(c, a, i, !1, null, null, null),
				p = u.exports,
				g = { components: { Messages: p } },
				h = g,
				m = Object(r['a'])(h, t, o, !1, null, null, null);
			e['default'] = m.exports;
		},
	},
]);
//# sourceMappingURL=chunk-2d0e60e9.57ce16d3.js.map
