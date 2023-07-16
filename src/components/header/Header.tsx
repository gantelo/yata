import { StyleSheet, View } from 'react-native';
import { verticalScale } from 'src/styles/Sizes';

import { Colors, Sizes } from '@styles';

const Header = ({ children }: React.PropsWithChildren) => {
	return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
	container: {
		height: verticalScale(323 - 50),
		backgroundColor: Colors.bg.funk,
		paddingHorizontal: Sizes.margin.md,
	},
});

export default Header;
