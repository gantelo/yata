import { ListRenderItemInfo, Text, View } from 'react-native';

import { ChatMessage } from '@types';

const ChatMessageBubble = (props: ListRenderItemInfo<ChatMessage>) => {
	const { time } = props.item;

	return (
		<View>
			<Text>{time}</Text>
		</View>
	);
};

export default ChatMessageBubble;
