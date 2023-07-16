import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { verticalScale } from '@styles';

type TouchableIconProps = TouchableOpacityProps & {
	Icon: () => React.JSX.Element;
};

const TouchableIcon = ({ Icon, ...rest }: TouchableIconProps) => {
	return (
		<TouchableOpacity style={styles.icon} {...rest}>
			<Icon />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	icon: {
		padding: verticalScale(5),
	},
});

export default TouchableIcon;
