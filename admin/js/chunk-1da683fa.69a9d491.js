(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
	['chunk-1da683fa'],
	{
		'0b07': function(e, t, l) {
			'use strict';
			l.r(t);
			var a = function() {
					var e = this,
						t = e.$createElement,
						l = e._self._c || t;
					return l('Form');
				},
				o = [],
				r = function() {
					var e = this,
						t = e.$createElement,
						l = e._self._c || t;
					return l(
						'el-form',
						{ ref: 'form', attrs: { model: e.form, 'label-width': '120px' } },
						[
							l(
								'el-form-item',
								{ attrs: { label: 'Activity name' } },
								[
									l('el-input', {
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
							l(
								'el-form-item',
								{ attrs: { label: 'Activity zone' } },
								[
									l(
										'el-select',
										{
											attrs: { placeholder: 'please select your zone' },
											model: {
												value: e.form.region,
												callback: function(t) {
													e.$set(e.form, 'region', t);
												},
												expression: 'form.region',
											},
										},
										[
											l('el-option', {
												attrs: { label: 'Zone one', value: 'shanghai' },
											}),
											l('el-option', {
												attrs: { label: 'Zone two', value: 'beijing' },
											}),
										],
										1,
									),
								],
								1,
							),
							l(
								'el-form-item',
								{ attrs: { label: 'Activity time' } },
								[
									l(
										'el-col',
										{ attrs: { span: 11 } },
										[
											l('el-date-picker', {
												staticStyle: { width: '100%' },
												attrs: { type: 'date', placeholder: 'Pick a date' },
												model: {
													value: e.form.date1,
													callback: function(t) {
														e.$set(e.form, 'date1', t);
													},
													expression: 'form.date1',
												},
											}),
										],
										1,
									),
									l('el-col', { staticClass: 'line', attrs: { span: 2 } }, [
										e._v('-'),
									]),
									l(
										'el-col',
										{ attrs: { span: 11 } },
										[
											l('el-time-picker', {
												staticStyle: { width: '100%' },
												attrs: { placeholder: 'Pick a time' },
												model: {
													value: e.form.date2,
													callback: function(t) {
														e.$set(e.form, 'date2', t);
													},
													expression: 'form.date2',
												},
											}),
										],
										1,
									),
								],
								1,
							),
							l(
								'el-form-item',
								{ attrs: { label: 'Instant delivery' } },
								[
									l('el-switch', {
										model: {
											value: e.form.delivery,
											callback: function(t) {
												e.$set(e.form, 'delivery', t);
											},
											expression: 'form.delivery',
										},
									}),
								],
								1,
							),
							l(
								'el-form-item',
								{ attrs: { label: 'Activity type' } },
								[
									l(
										'el-checkbox-group',
										{
											model: {
												value: e.form.type,
												callback: function(t) {
													e.$set(e.form, 'type', t);
												},
												expression: 'form.type',
											},
										},
										[
											l('el-checkbox', {
												attrs: { label: 'Online activities', name: 'type' },
											}),
											l('el-checkbox', {
												attrs: {
													label: 'Promotion activities',
													name: 'type',
												},
											}),
											l('el-checkbox', {
												attrs: {
													label: 'Offline activities',
													name: 'type',
												},
											}),
											l('el-checkbox', {
												attrs: {
													label: 'Simple brand exposure',
													name: 'type',
												},
											}),
										],
										1,
									),
								],
								1,
							),
							l(
								'el-form-item',
								{ attrs: { label: 'Resources' } },
								[
									l(
										'el-radio-group',
										{
											model: {
												value: e.form.resource,
												callback: function(t) {
													e.$set(e.form, 'resource', t);
												},
												expression: 'form.resource',
											},
										},
										[
											l('el-radio', { attrs: { label: 'Sponsor' } }),
											l('el-radio', { attrs: { label: 'Venue' } }),
										],
										1,
									),
								],
								1,
							),
							l('Tinymce'),
							l(
								'el-form-item',
								{ staticClass: 'form-action' },
								[
									l(
										'el-button',
										{ attrs: { type: 'primary' }, on: { click: e.onSubmit } },
										[e._v('Create')],
									),
									l('el-button', [e._v('Cancel')]),
								],
								1,
							),
						],
						1,
					);
				},
				n = [],
				i = l('8256'),
				c = {
					components: { Tinymce: i['a'] },
					data: function() {
						return {
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
						};
					},
					methods: { onSubmit: function() {} },
				},
				s = c,
				m = (l('fc16'), l('2877')),
				f = Object(m['a'])(s, r, n, !1, null, null, null),
				u = f.exports,
				p = { components: { Form: u } },
				d = p,
				b = Object(m['a'])(d, a, o, !1, null, null, null);
			t['default'] = b.exports;
		},
		'496f': function(e, t, l) {},
		fc16: function(e, t, l) {
			'use strict';
			var a = l('496f'),
				o = l.n(a);
			o.a;
		},
	},
]);
//# sourceMappingURL=chunk-1da683fa.69a9d491.js.map
