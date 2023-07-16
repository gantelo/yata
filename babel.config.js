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
					'@components': './src/components',
					'@icons': './src/icons',
					'@screens': './src/screens',
					'@shared': './src/shared',
					'@styles': './src/styles',
				},
			},
		],
		'jest-hoist',
	],
};
