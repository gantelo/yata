import { StyleSheet, View } from 'react-native';

import { Colors } from '@styles';

import { ChatDetailsHeader, ChatMessages } from './templates';

const ChatDetails = () => {
	return (
		<View style={styles.container}>
			<ChatDetailsHeader />
			<ChatMessages />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.bg.root,
	},
});

export default ChatDetails;
