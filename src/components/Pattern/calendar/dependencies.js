// this dependencies was imported globaly in original project:
// moment js
const moment = require('moment');
require('moment/locale/ru');
Vue.use(require('vue-moment'), {
	moment,
});
// //moment js

// element vue
import DatePicker from 'element-ui';
import 'element-ui/lib/theme-chalk/icon.css';
import 'element-ui/lib/theme-chalk/date-picker.css';
import locale from 'element-ui/lib/locale/lang/ru-RU';
Vue.use(DatePicker, { locale });
// //element vue
