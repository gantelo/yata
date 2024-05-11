import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { Phone } from '@icons';

const ChatDetailsPhone = () => {
	return (
		<TouchableOpacity style={styles.container} activeOpacity={0.5}>
			<Phone />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
});

export default ChatDetailsPhone;
