import { StyleSheet, TouchableOpacity } from 'react-native';

import { useToggle } from '@hooks';
import { CText } from '@shared';
import { Colors, verticalScale } from '@styles';

import { Prompt } from '../atoms';

type DetailsPromptProps = {
	about: string;
};

const MAX_TRUNCATED_LENGTH = 115;

const truncateText = (text: string, length: number, isTruncated: boolean) => {
	if (text.length > length && isTruncated) {
		return text.slice(0, length) + '...';
	}
	return text;
};

// TODO: Add skeleton loader
// TODO: Extract Prompt to shared
const DetailsPrompt = ({ about = '' }: DetailsPromptProps) => {
	const [isTruncated, toggleIsTruncated] = useToggle(true);

	const shouldTruncate = MAX_TRUNCATED_LENGTH < about.length;
	const truncatedAbout = truncateText(about, MAX_TRUNCATED_LENGTH, isTruncated && shouldTruncate);

	return (
		<TouchableOpacity style={styles.container} onPress={toggleIsTruncated}>
			<CText fontSize="lg" color={Colors.secondary.normal} style={styles.txt}>
				<Prompt about={truncatedAbout} shouldTruncate={shouldTruncate} isTruncated={isTruncated} />
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

export default DetailsPrompt;
