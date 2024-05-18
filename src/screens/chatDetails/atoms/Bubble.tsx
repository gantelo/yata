import { ListRenderItemInfo, StyleSheet, Text, View } from 'react-native';

import { CText } from '@shared';
import { Colors, Sizes, verticalScale } from '@styles';
import { ChatDirection, ChatMessage } from '@types';

type BubbleProps = ChatMessage & {
	first: boolean;
};

const Bubble = ({ message, direction, first, time }: BubbleProps) => {
	const bubbleStyle =
		direction === ChatDirection.Left
			? { ...styles.left, ...(first ? styles.firstLeft : {}) }
			: { ...styles.right, ...(first ? styles.firstRight : {}) };

	return (
		<View style={[styles.container, bubbleStyle, first && styles.first]}>
			<CText color={bubbleStyle.color} style={{ maxWidth: '90%' }}>
				{message}
			</CText>
			<CText color={bubbleStyle.color} style={styles.time} fontSize="xxs" weight='semibold'>
				{time}
			</CText>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		maxWidth: '80%',
		padding: verticalScale(10),
		borderRadius: Sizes.border.lg,
	},
	left: {
		backgroundColor: Colors.bg.default,
		color: Colors.secondary.normal,
	},
	right: {
		backgroundColor: Colors.secondary.normal,
		color: Colors.bg.whitey,
	},
	first: {
		marginTop: verticalScale(10),
	},
	firstLeft: {
		borderTopLeftRadius: 0,
	},
	firstRight: {
		borderTopRightRadius: 0,
	},
	time: {
		alignSelf: 'flex-end',
		top: verticalScale(3),
		marginLeft: verticalScale(6),
	},
});

export default Bubble;
