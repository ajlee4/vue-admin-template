(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
	['chunk-b74f0588'],
	{
		'0872': function(t, a, e) {},
		2800: function(t, a, e) {
			'use strict';
			e.r(a);
			var l = function() {
					var t = this,
						a = t.$createElement,
						e = t._self._c || a;
					return e('Tabs');
				},
				n = [],
				o = function() {
					var t = this,
						a = t.$createElement,
						e = t._self._c || a;
					return e(
						'div',
						[
							e(
								'el-row',
								[
									e(
										'el-tabs',
										{
											on: { 'tab-click': t.handleClick },
											model: {
												value: t.activeName,
												callback: function(a) {
													t.activeName = a;
												},
												expression: 'activeName',
											},
										},
										[
											e(
												'el-tab-pane',
												{ attrs: { label: 'User', name: 'first' } },
												[t._v('User')],
											),
											e(
												'el-tab-pane',
												{ attrs: { label: 'Config', name: 'second' } },
												[t._v('Config')],
											),
											e(
												'el-tab-pane',
												{ attrs: { label: 'Role', name: 'third' } },
												[t._v('Role')],
											),
											e(
												'el-tab-pane',
												{ attrs: { label: 'Task', name: 'fourth' } },
												[t._v('Task')],
											),
										],
										1,
									),
								],
								1,
							),
							e(
								'el-row',
								[
									e(
										'el-tabs',
										{
											attrs: { type: 'card' },
											on: { 'tab-click': t.handleClick },
										},
										[
											e('el-tab-pane', { attrs: { label: 'User' } }, [
												t._v('User'),
											]),
											e('el-tab-pane', { attrs: { label: 'Config' } }, [
												t._v('Config'),
											]),
											e('el-tab-pane', { attrs: { label: 'Role' } }, [
												t._v('Role'),
											]),
											e('el-tab-pane', { attrs: { label: 'Task' } }, [
												t._v('Task'),
											]),
										],
										1,
									),
								],
								1,
							),
							e(
								'el-row',
								[
									e(
										'el-tabs',
										{ attrs: { type: 'border-card' } },
										[
											e('el-tab-pane', { attrs: { label: 'User' } }, [
												t._v('User'),
											]),
											e('el-tab-pane', { attrs: { label: 'Config' } }, [
												t._v('Config'),
											]),
											e('el-tab-pane', { attrs: { label: 'Role' } }, [
												t._v('Role'),
											]),
											e('el-tab-pane', { attrs: { label: 'Task' } }, [
												t._v('Task'),
											]),
										],
										1,
									),
								],
								1,
							),
							e(
								'el-row',
								[
									e(
										'el-radio-group',
										{
											staticStyle: { 'margin-bottom': '30px' },
											model: {
												value: t.tabPosition,
												callback: function(a) {
													t.tabPosition = a;
												},
												expression: 'tabPosition',
											},
										},
										[
											e('el-radio-button', { attrs: { label: 'top' } }, [
												t._v('top'),
											]),
											e('el-radio-button', { attrs: { label: 'right' } }, [
												t._v('right'),
											]),
											e('el-radio-button', { attrs: { label: 'bottom' } }, [
												t._v('bottom'),
											]),
											e('el-radio-button', { attrs: { label: 'left' } }, [
												t._v('left'),
											]),
										],
										1,
									),
									e(
										'el-tabs',
										{
											staticStyle: { height: '200px' },
											attrs: { 'tab-position': t.tabPosition },
										},
										[
											e('el-tab-pane', { attrs: { label: 'User' } }, [
												t._v('User'),
											]),
											e('el-tab-pane', { attrs: { label: 'Config' } }, [
												t._v('Config'),
											]),
											e('el-tab-pane', { attrs: { label: 'Role' } }, [
												t._v('Role'),
											]),
											e('el-tab-pane', { attrs: { label: 'Task' } }, [
												t._v('Task'),
											]),
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
				s = [],
				r = {
					data: function() {
						return { activeName: 'first', tabPosition: 'left' };
					},
					methods: {
						handleClick: function(t, a) {
							console.log(t, a);
						},
					},
				},
				b = r,
				i = (e('fd8d'), e('2877')),
				c = Object(i['a'])(b, o, s, !1, null, '70686966', null),
				p = c.exports,
				v = { components: { Tabs: p } },
				u = v,
				f = Object(i['a'])(u, l, n, !1, null, null, null);
			a['default'] = f.exports;
		},
		fd8d: function(t, a, e) {
			'use strict';
			var l = e('0872'),
				n = e.n(l);
			n.a;
		},
	},
]);
//# sourceMappingURL=chunk-b74f0588.45ec449f.js.map
