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
	publicPath: '/',
	outputDir: 'dist',
	assetsDir: 'admin',
	chainWebpack(config) {
		config.plugins.delete('prefetch')
		config.plugins.delete('preload')
	},
};
