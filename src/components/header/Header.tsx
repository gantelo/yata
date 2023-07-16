import { StyleSheet, View } from 'react-native';
import { verticalScale } from 'src/styles/Sizes';

import { Colors, Sizes } from '@styles';

type HeaderProps = {
	HeaderImage: () => JSX.Element;
};

const Header = ({ HeaderImage, children }: React.PropsWithChildren<HeaderProps>) => {
	return (
		<View style={styles.container}>
			{children}
			<HeaderImage />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: verticalScale(323 - 50),
		backgroundColor: Colors.bg.funk,
		paddingHorizontal: Sizes.margin.md,
	},
});

export default Header;
