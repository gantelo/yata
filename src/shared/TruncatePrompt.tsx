import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import { useToggle } from '@hooks';
import { CText } from '@shared';
import { Colors, verticalScale } from '@styles';

type PromptProps = {
	about: string;
	maxLength?: number;
};

const MAX_TRUNCATED_LENGTH = 115;

const truncateText = (text: string, length: number, isTruncated: boolean) => {
	if (text.length > length && isTruncated) {
		return text.slice(0, length) + '...';
	}
	return text;
};

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
