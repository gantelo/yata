import { StyleSheet, View } from 'react-native';

import { Colors, Sizes, verticalScale } from '@styles';

import { LowHeaderDefaultBg } from './bg/LowBgImage';

type HeaderProps = {
	HeaderImage?: () => JSX.Element;
};

const LowHeader = ({ HeaderImage = LowHeaderDefaultBg, children }: React.PropsWithChildren<HeaderProps>) => {
	return (
		<View style={styles.container}>
			{children}
			<HeaderImage />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		height: verticalScale(70),
		backgroundColor: Colors.bg.funk,
		paddingHorizontal: Sizes.margin.md,
		justifyContent: 'center',
		paddingBottom: verticalScale(7),
	},
});

export default LowHeader;
