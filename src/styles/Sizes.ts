import { Dimensions, Platform } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const GuidelineBaseHeight = 844;
const GuidelineBaseWidth = 390;

const verticalScale = (size: number, floor = true, setMax = false) => {
	const result = (screenHeight / GuidelineBaseHeight) * size;
	const newSize = floor ? Math.floor(result) : result;
	return setMax && newSize > size ? size : newSize;
};

const horizontalScale = (size: number, floor = true, setMax = false) => {
	const result = (screenWidth / GuidelineBaseWidth) * size;
	const newSize = floor ? Math.floor(result) : result;
	return setMax && newSize > size ? size : newSize;
};

export { verticalScale, horizontalScale };

export const Sizes = {
	border: {
		default: 4,
		lg: 8,
	},
	fonts: {
		size: {
			xxs: verticalScale(11),
			xs: verticalScale(12),
			sm: verticalScale(13),
			md: verticalScale(14),
			lg: verticalScale(16),
			xl: verticalScale(18),
			xxl: verticalScale(20),
			'2xl': verticalScale(22),
			'3xl': verticalScale(24),
		},
		weight: {
			thin: '300',
			regular: '400',
			medium: '500',
			semibold: Platform.OS === 'android' ? '700' : '600',
			bold: '700',
		},
	},
	margin: {
		xxxs: horizontalScale(4),
		xxs: horizontalScale(8),
		xs: horizontalScale(12),
		sm: horizontalScale(16),
		md: horizontalScale(21),
	},
};
