import { StyleSheet, View } from 'react-native';

import { BackButton } from '@shared';

import { ChatDetailsPhone, ChatDetailsProfileImage, ChatDetailsTitle } from '../atoms';

type HeaderContentProps = {
	title?: string;
	avatarSrc?: string;
};

const HeaderContent = ({ title, avatarSrc }: HeaderContentProps) => {
	return (
		<View style={styles.container}>
			<BackButton />
			<View style={styles.titleContainer}>
				<ChatDetailsProfileImage src={avatarSrc ?? ''} />
				<ChatDetailsTitle title={title} />
			</View>
			<ChatDetailsPhone />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	titleContainer: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
});

export default HeaderContent;
