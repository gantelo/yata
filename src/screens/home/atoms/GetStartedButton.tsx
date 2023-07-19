import React from 'react';
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { Defs, LinearGradient, Rect, Stop, Svg } from 'react-native-svg';

import { CText } from '@shared';
import { Colors } from '@styles';

const GetStartedButton = ({ ...props }: TouchableOpacityProps) => {
	return (
		<TouchableOpacity {...props}>
			<View style={styles.textContainer}>
				<CText weight="semibold" fontSize="md" color={Colors.secondary.normal}>
					Get Started
				</CText>
			</View>
			<Svg width="106" height="40" viewBox="0 0 106 40">
				<Rect width="106" height="40" rx="4" fill="url(#paint0_linear_202_17)" />
				<Defs>
					<LinearGradient
						id="paint0_linear_202_17"
						x1="0"
						y1="0"
						x2="83.5"
						y2="40"
						gradientUnits="userSpaceOnUse"
					>
						<Stop stopColor="#FF9270" />
						<Stop offset="1" stopColor="#FF9270" stopOpacity="0.53" />
					</LinearGradient>
				</Defs>
			</Svg>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	textContainer: {
		position: 'absolute',
		width: 106,
		height: 40,
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 1,
	},
});

export default GetStartedButton;
