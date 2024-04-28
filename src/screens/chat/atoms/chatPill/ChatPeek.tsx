import { StyleSheet, View } from 'react-native';

import { CText } from '@shared';
import { Sizes, verticalScale } from '@styles';
import { truncateText } from '@utils';

const MAX_TRUNCATED_LENGTH = 52;

type ChatPeekProps = {
	name: string;
	lastMessage: string;
};

const ChatPeek = ({ name, lastMessage }: ChatPeekProps) => {
	return (
		<View style={styles.container}>
			<CText weight="bold" fontSize="lg" style={styles.nameContainer}>
				{name}
			</CText>
			<CText weight="thin" fontSize="sm">
				{truncateText(lastMessage ?? '', MAX_TRUNCATED_LENGTH)}
			</CText>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: Sizes.margin.xs,
	},
	nameContainer: {
		marginVertical: verticalScale(2),
	},
});

export default ChatPeek;
