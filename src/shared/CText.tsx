import { StyleSheet, Text, TextProps } from 'react-native';

import { Colors, Sizes } from '@styles';

type CTextProps = TextProps & {
	fontSize?: keyof typeof Sizes.fonts.size;
	weight?: keyof typeof Sizes.fonts.weight;
	color?: string;
	variant?: 'title';
};

const CText = ({
	fontSize = 'md',
	weight = 'regular',
	variant,
	children,
	color,
	...rest
}: React.PropsWithChildren<CTextProps>) => {
	color = variant === 'title' ? Colors.secondary.normal : color;
	fontSize = variant === 'title' ? 'xl' : fontSize;
	weight = variant === 'title' ? 'bold' : weight;

	const style = {
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
