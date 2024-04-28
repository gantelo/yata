import { StyleSheet, TouchableOpacity } from 'react-native';

import { useToggle } from '@hooks';
import { CText } from '@shared';
import { Colors, verticalScale } from '@styles';
import { truncateText } from '@utils';

type PromptProps = {
	about: string;
	maxLength?: number;
};

const MAX_TRUNCATED_LENGTH = 115;

//TODO: add animation on isTruncated effect
const TruncatePrompt = ({ about, maxLength = MAX_TRUNCATED_LENGTH }: PromptProps) => {
	const [isTruncated, toggleIsTruncated] = useToggle(true);

	const shouldTruncate = maxLength < about.length;
	const truncatedAbout = truncateText(about, MAX_TRUNCATED_LENGTH, isTruncated && shouldTruncate);

	return (
		<TouchableOpacity style={styles.container} onPress={toggleIsTruncated}>
			<CText fontSize="lg" color={Colors.secondary.normal} style={styles.txt}>
				{truncatedAbout}
				{shouldTruncate && (
					<>
						<CText fontSize="lg" color={Colors.primary.normal} weight="semibold">
							{'   '}
							View {isTruncated ? 'More' : 'Less'}
						</CText>
					</>
				)}
			</CText>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingVertical: verticalScale(15),
		position: 'relative',
	},
	txt: {
		lineHeight: 22,
	},
});

export default TruncatePrompt;
