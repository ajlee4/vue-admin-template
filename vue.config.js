// module.exports = {
// 	css: {
// 		extract: false,
// 	  },
// 	configureWebpack: {
// 		optimization: {
// 			splitChunks: false,
// 		},
// 	},
// };


module.exports = {
	chainWebpack(config) {
		config.plugins.delete('prefetch')
		config.plugins.delete('preload')
	},
};
