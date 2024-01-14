import React from 'react';
import { StyleSheet, View } from 'react-native';

import { CText } from '@shared';
import { Colors } from '@styles';

type InfoProps = {
	label: string;
	icon: React.ReactNode;
	value: string;
};

const Info = ({ label, icon, value }: InfoProps) => {
	return (
		<View style={styles.container}>
			<View style={styles.labelContainer}>
				{icon}
				<CText style={styles.label} fontSize="lg" weight="semibold" color={Colors.secondary.normal}>
					{label}
				</CText>
			</View>
			<CText style={styles.label} fontSize="lg" weight="semibold" color={Colors.secondary.normal}>
				{value}
			</CText>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingVertical: 10,
	},
	labelContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	label: {
		marginLeft: 15,
	},
});

export default Info;
