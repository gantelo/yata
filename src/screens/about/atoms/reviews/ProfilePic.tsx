import React from 'react';
import { StyleSheet, View } from 'react-native';

import { ImageFallback } from '@shared';
import { verticalScale } from '@styles';

type ReviewProfilePicProps = {
	imgSrc?: string;
};

const ReviewProfilePic = ({ imgSrc }: ReviewProfilePicProps) => {
	return (
		<View style={styles.container}>
			<ImageFallback
				src={imgSrc ? { uri: imgSrc } : undefined}
				size={[verticalScale(50), verticalScale(50)]}
				styles={styles.img}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		borderColor: 'white',
		borderWidth: 2,
		borderRadius: 99,
	},
	img: {
		borderRadius: 99,
	},
});

export default ReviewProfilePic;
