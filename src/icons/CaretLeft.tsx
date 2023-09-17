import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Path, Svg } from 'react-native-svg';

import { Colors, verticalScale } from '@styles';

const CaretLeft = () => (
	<View style={styles.container}>
		<Svg width="11" height="20" viewBox="0 0 11 20">
			<Path d="M10 1L1 10L10 19" stroke="#493C53" strokeWidth="2.4" fill={Colors.bg.default} />
		</Svg>
	</View>
);

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.bg.default,
		padding: verticalScale(10),
		borderRadius: 99,
		width: verticalScale(40),
		height: verticalScale(40),
		justifyContent: 'center',
		alignItems: 'center',
		paddingRight: verticalScale(13),
	},
});

export default CaretLeft;
