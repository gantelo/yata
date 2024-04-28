module.exports = {
	preset: 'react-native',
	transformIgnorePatterns: ['<rootDir>/node_modules/(?!(@react-native|react-native|recoil|@react-navigation|react-native-reanimated)/)'],
	moduleNameMapper: {
		recoil: 'recoil/native',
	},
};
