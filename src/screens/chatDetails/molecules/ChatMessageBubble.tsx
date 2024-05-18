import { ListRenderItemInfo, StyleSheet, Text, View } from 'react-native';

import { verticalScale } from '@styles';
import { ChatDirection, ChatMessage } from '@types';

import { Bubble } from '../atoms';

type ChatMessageBubbleProps = ListRenderItemInfo<
	ChatMessage & {
		prevDirection: ChatDirection;
	}
>;

const ChatMessageBubble = (props: ChatMessageBubbleProps) => {
	const { id, direction, prevDirection } = props.item;

	return (
		<View
			style={[styles.container, { alignSelf: direction === ChatDirection.Left ? 'flex-start' : 'flex-end' }]}
			key={id}
		>
			<Bubble {...props.item} first={direction !== prevDirection} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginTop: verticalScale(3),
		marginHorizontal: verticalScale(8),
	},
});

export default ChatMessageBubble;
