import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Colors, Sizes, verticalScale } from '@styles';

import CText from './CText';

type ButtonProps = TouchableOpacityProps & {
	label: string;
};

const Button = ({ label, ...rest }: ButtonProps) => {
	return (
		<TouchableOpacity style={styles.container} {...rest}>
			<CText color={Colors.secondary.normal} weight="semibold">
				{label}
			</CText>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		padding: verticalScale(4),
		backgroundColor: Colors.primary.light,
		height: verticalScale(40),
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: Sizes.border.default,
	},
});

export default Button;
