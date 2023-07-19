module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			require.resolve('babel-plugin-module-resolver'),
			{
				cwd: 'babelrc',
				extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
				root: ['.'],
				alias: {
					'@assets': './assets',
					'@components': './src/components',
					'@data': './src/data',
					'@hooks': './src/hooks',
					'@icons': './src/icons',
					'@screens': './src/screens',
					'@shared': './src/shared',
					'@styles': './src/styles',
					'@types': './src/types',
				},
			},
		],
		'jest-hoist',
		'react-native-reanimated/plugin',
	],
};
