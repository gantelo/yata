import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

import { useHomeAnimations } from '@hooks';
import { Colors, Sizes } from '@styles';

type HeaderProps = {
	HeaderImage: () => JSX.Element;
};

const Header = ({ HeaderImage, children }: React.PropsWithChildren<HeaderProps>) => {
	const { headerStyles } = useHomeAnimations();
	return (
		<Animated.View style={[styles.container, headerStyles]}>
			{children}
			<HeaderImage />
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: Colors.bg.funk,
		paddingHorizontal: Sizes.margin.md,
	},
});

export default Header;
