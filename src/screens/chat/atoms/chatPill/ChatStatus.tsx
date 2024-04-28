import { StyleSheet, View } from 'react-native';

import { CText } from '@shared';
import { Colors, Sizes, verticalScale } from '@styles';

type ChatStatusProps = {
	time: string;
	unread: number;
};

const ChatStatus = ({ time, unread }: ChatStatusProps) => {
	return (
		<View style={styles.container}>
			<CText weight="thin" fontSize="sm">
				{time}
			</CText>
			{unread > 0 && (
				<View style={styles.unreadPill}>
					<CText weight="medium" fontSize="sm" color="white">
						{unread}
					</CText>
				</View>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		marginHorizontal: Sizes.margin.xs,
	},
	unreadPill: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.secondary.light,
		borderRadius: 99,
		width: verticalScale(24),
		height: verticalScale(24),
		marginTop: Sizes.margin.xxxs,
	},
});

export default ChatStatus;
