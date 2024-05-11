import { StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Sizes, verticalScale } from '@styles';
import { ChatCard, ChatDetailsProp, Routes } from '@types';

import { ChatPeek, ChatProfileImage, ChatStatus } from '../atoms';

type ChatPillProps = ChatCard;

const ChatPill = ({ id, name, lastMessage, time, unread, avatar }: ChatPillProps) => {
	const navigation = useNavigation<ChatDetailsProp>();

	const handleNavigateToChatDetails = () => {
		navigation.navigate(Routes.ChatDetails, { id, name, avatar });
	};

	return (
		<TouchableOpacity style={styles.container} activeOpacity={0.6} onPress={handleNavigateToChatDetails}>
			<ChatProfileImage src={avatar} />
			<ChatPeek lastMessage={lastMessage} name={name} />
			<ChatStatus time={time} unread={unread} />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: 'white',
		marginVertical: Sizes.margin.xxs,
		margin: Sizes.margin.xs,
		borderRadius: Sizes.border.lg,
		height: verticalScale(80),
	},
});

export default ChatPill;
