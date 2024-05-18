import { FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { MockMessages } from 'src/mocks/ChatMessagesMock';

import { ChatMessage } from '@types';

import { ChatMessageBubble } from '../molecules';

/* TODO: Implement the previous day feature */
const ChatMessages = () => {
	const handleRenderItem = ({ item, index, separators }: ListRenderItemInfo<ChatMessage>) => {
		return (
			<ChatMessageBubble
				item={{ ...item, prevDirection: MockMessages[index - 1]?.direction }}
				index={index}
				separators={separators}
			/>
		);
	};

	return (
		<View style={styles.container}>
			<FlatList data={MockMessages} renderItem={handleRenderItem} />
			{/* {MockMessages.map((message, idx) => (
				<ChatMessageBubble
					item={{ ...message, prevDirection: MockMessages[idx - 1]?.direction }}
					index={idx}
					separators={(<></>) as any}
				/>
			))} */}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flex: 1,
	},
});

export default ChatMessages;
