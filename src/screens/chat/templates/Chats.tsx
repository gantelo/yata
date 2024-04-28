import { StyleSheet, View } from 'react-native';
import { MockChats } from 'src/mocks/MockChats';

import { Sizes } from '@styles';

import { ChatPill } from '../molecules';

const Chats = () => {
	return (
		<View style={styles.container}>
			{MockChats.map((x) => (
				<ChatPill
					id={x.id}
					name={x.name}
					lastMessage={x.lastMessage}
					time={x.time}
					unread={x.unread}
					avatar={x.avatar}
					key={x.id}
				/>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginVertical: Sizes.margin.xs,
	},
});

export default Chats;
