import { StyleSheet, View } from 'react-native';

import { ProfileImage } from '@components';
import { Colors, Sizes } from '@styles';
import { Categories } from '@types';

type ChatProfileImageProps = {
	src: string;
};

const ChatProfileImage = ({ src }: ChatProfileImageProps) => {
	return (
		<View style={styles.container}>
			<ProfileImage
				imgSrc={src}
				category={Categories.Accountant}
				size={50}
				innerSize={50}
				innerStyles={styles.img}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginHorizontal: Sizes.margin.xs,
		borderRadius: 99,
	},
	img: {
		borderRadius: 99,
		borderWidth: 2,
		borderColor: Colors.secondary.light,
	},
});

export default ChatProfileImage;
