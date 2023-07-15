import { Text, TextProps } from 'react-native';

import { Sizes } from '@styles';

type CTextProps = TextProps & {
	fontSize?: keyof typeof Sizes.fonts;
};

const CText = ({ fontSize = 'md', children, ...rest }: React.PropsWithChildren<CTextProps>) => {
	return (
		<Text style={{ fontSize: Sizes.fonts[fontSize], fontFamily: 'SF-Pro' }} {...rest}>
			{children}
		</Text>
	);
};

export default CText;
