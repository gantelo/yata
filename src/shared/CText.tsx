import { StyleSheet, Text, TextProps } from 'react-native';

import { Sizes } from '@styles';

type CTextProps = TextProps & {
	fontSize?: keyof typeof Sizes.fonts.size;
	weight?: keyof typeof Sizes.fonts.weight;
	color?: string;
};

const CText = ({
	fontSize = 'md',
	weight = 'regular',
	children,
	color,
	...rest
}: React.PropsWithChildren<CTextProps>) => {
	const style = {
		...styles.font,
		color,
		fontSize: Sizes.fonts.size[fontSize],
		fontWeight: Sizes.fonts.weight[weight] as never,
	};

	const mergedStyles = StyleSheet.flatten([styles.font, style, rest.style]);

	return (
		<Text {...rest} style={mergedStyles}>
			{children}
		</Text>
	);
};

const styles = StyleSheet.create({
	font: {
		fontFamily: 'SF-Pro',
	},
});

export default CText;
