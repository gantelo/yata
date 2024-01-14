import { StyleSheet, View } from 'react-native';

import { Colors, Sizes, verticalScale } from '@styles';

import { MidHeaderDefaultBg } from './bg/MidBgImage';

type HeaderProps = {
	HeaderImage?: () => JSX.Element;
};

const MidHeader = ({ HeaderImage = MidHeaderDefaultBg, children }: React.PropsWithChildren<HeaderProps>) => {
	return (
		<View style={styles.container}>
			{children}
			<HeaderImage />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: verticalScale(100),
		backgroundColor: Colors.bg.funk,
		paddingHorizontal: Sizes.margin.md,
		justifyContent: 'center',
	},
});

export default MidHeader;
