import { FlatList, View } from 'react-native';
import { MockMessages } from 'src/mocks/ChatMessagesMock';

import { ChatMessageBubble } from '../molecules';

const ChatMessages = () => {
	return (
		<View>
			<FlatList data={MockMessages} renderItem={ChatMessageBubble} />
		</View>
	);
};

export default ChatMessages;
