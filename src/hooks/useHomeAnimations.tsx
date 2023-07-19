import { useContext } from 'react';
import { Easing, Extrapolation, interpolate, useAnimatedStyle, withTiming } from 'react-native-reanimated';

import { HeaderContext } from '@components';
import { verticalScale } from '@styles';

const minHeight = verticalScale(65);
const maxHeight = verticalScale(270);
const scaleY = verticalScale(49);

const useHomeAnimations = () => {
	const headerScale = useContext(HeaderContext);

	const headerStyles = useAnimatedStyle(() => {
		const scale = interpolate(headerScale!.value, [0, 100], [minHeight, maxHeight], {
			extrapolateRight: Extrapolation.CLAMP,
		});

		return {
			height: scale,
		};
	});

	const bgImageStyles = useAnimatedStyle(() => {
		const scale = interpolate(headerScale!.value, [0, 100], [-300, 0], {
			extrapolateRight: Extrapolation.CLAMP,
		});

		const opacity = interpolate(headerScale!.value, [90, 100], [0, 1], {
			extrapolateRight: Extrapolation.CLAMP,
		});

		return { transform: [{ translateY: scale }], opacity };
	});

	const getStartedStyles = useAnimatedStyle(() => {
		const scale = interpolate(headerScale!.value, [0, 100], [-300, 0], {
			extrapolateRight: Extrapolation.CLAMP,
		});

		const opacity = interpolate(headerScale!.value, [50, 100], [0, 1], {
			extrapolateRight: Extrapolation.CLAMP,
		});

		return {
			transform: [{ translateY: scale }],
			opacity,
		};
	});

	const genericTextStyles = useAnimatedStyle(() => {
		const scale = interpolate(headerScale!.value, [0, 100], [-300, 0], {
			extrapolateRight: Extrapolation.CLAMP,
		});
		const opacity = interpolate(headerScale!.value, [70, 100], [0, 1], {
			extrapolateRight: Extrapolation.CLAMP,
		});

		return {
			transform: [{ translateX: scale }],
			opacity,
		};
	});

	const hiAnimatedStyles = useAnimatedStyle(() => {
		const scale = interpolate(headerScale!.value, [0, 100], [-scaleY, 0], {
			extrapolateRight: Extrapolation.CLAMP,
		});

		return {
			transform: [{ translateY: scale }, { translateX: -scale }],
		};
	});

	const handleHideHeader = () => {
		headerScale!.value = withTiming(0, {
			duration: 800,
			easing: Easing.inOut(Easing.exp),
		});
	};

	const handleShowHeader = () => {
		headerScale!.value = withTiming(100, {
			duration: 800,
			easing: Easing.inOut(Easing.exp),
		});
	};

	return {
		headerStyles,
		bgImageStyles,
		getStartedStyles,
		handleHideHeader,
		handleShowHeader,
		genericTextStyles,
		hiAnimatedStyles,
	};
};

export default useHomeAnimations;
