import React from 'react';
import { StyleSheet, View } from 'react-native';

import { CText } from '@shared';
import { Colors, verticalScale } from '@styles';

type NameProps = {
	name: string;
	location?: string;
};

// TODO: add skeleton loading
const Name = ({ name, location }: NameProps) => {
	return (
		<View style={styles.container}>
			<CText fontSize="lg" weight="semibold">
				{name}
			</CText>
			<CText color={Colors.secondary.light} style={styles.location}>
				{location}
			</CText>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingLeft: verticalScale(15),
	},
	location: {
		paddingLeft: verticalScale(2),
	},
});

export default Name;
