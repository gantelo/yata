import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Colors } from '@styles';

type HorizontalDividerProps = {
	marginHorizontal?: number;
	height?: number;
};

const HorizontalDivider = ({ marginHorizontal, height }: HorizontalDividerProps) => {
	return (
		<View
			style={[
				styles.divider,
				marginHorizontal !== undefined && { marginHorizontal },
				height !== undefined && { height },
			]}
		/>
	);
};

const styles = StyleSheet.create({
	divider: {
		height: 4,
		backgroundColor: Colors.bg.default,
	},
});

export default HorizontalDivider;
