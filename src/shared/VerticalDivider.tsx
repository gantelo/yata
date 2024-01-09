import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Colors } from '@styles';

type VerticalDividerProps = {
	marginHorizontal?: number;
};

const VerticalDivider = ({ marginHorizontal }: VerticalDividerProps) => {
	return <View style={[styles.divider, marginHorizontal !== undefined && { marginHorizontal }]} />;
};

const styles = StyleSheet.create({
	divider: {
		marginHorizontal: 15,
		borderLeftWidth: 2,
		borderLeftColor: Colors.bg.default,
		marginVertical: 4,
	},
});

export default VerticalDivider;
