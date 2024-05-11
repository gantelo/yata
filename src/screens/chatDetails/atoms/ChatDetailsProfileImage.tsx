import { StyleSheet, View } from 'react-native';

import { ProfileImage } from '@components';
import { Colors, Sizes } from '@styles';
import { Categories } from '@types';

type ChatDetailsProfileImageProps = {
	src: string;
};

const ChatDetailsProfileImage = ({ src }: ChatDetailsProfileImageProps) => {
	return (
		<View style={styles.container}>
			<ProfileImage
				imgSrc={src}
				category={Categories.Accountant}
				size={40}
				innerSize={35}
				innerStyles={styles.img}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginRight: Sizes.margin.xs,
		borderRadius: 99,
	},
	img: {
		borderRadius: 99,
		borderWidth: 2,
		borderColor: Colors.secondary.light,
	},
});

export default ChatDetailsProfileImage;
