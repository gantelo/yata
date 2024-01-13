import React from 'react';
import { Image, StyleSheet, View, ViewStyle } from 'react-native';

type RightArrowProps = {
	styles?: ViewStyle;
};

const RightArrow = ({ styles }: RightArrowProps) => {
	return (
		<View style={[baseStyles.container, styles !== undefined && { ...styles }]}>
			<Image source={require('@assets/images/right_arrow.png')} />
		</View>
	);
};

const baseStyles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default RightArrow;
