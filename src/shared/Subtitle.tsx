import { Colors } from '@styles';

import CText from './CText';

type SubtitleProps = {
	children: string;
};

const Subtitle = ({ children }: SubtitleProps) => {
	return (
		<CText fontSize="xl" weight="semibold" color={Colors.secondary.normal}>
			{children}
		</CText>
	);
};

export default Subtitle;
