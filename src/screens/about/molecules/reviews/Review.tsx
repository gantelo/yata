import React from 'react';
import { StyleSheet, View } from 'react-native';

import { CText } from '@shared';
import { verticalScale } from '@styles';
import { Review as ReviewType } from '@types';

import { Name, ProfilePic, Prompt, StarNumber } from '../../atoms';

type ReviewProps = {
	review?: ReviewType;
};

// TODO: add skeleton loading
const Review = ({ review }: ReviewProps) => {
	if (!review)
		return (
			<View style={styles.container}>
				{/* TODO: improve empty state */}
				<CText>No reviews yet</CText>
			</View>
		);

	return (
		<View style={styles.container}>
			<View style={styles.row}>
				<ProfilePic imgSrc={review.avatar} />
				<Name name={review.name} location={review.location ?? 'Buenos Aires'} />
				<StarNumber rating={review.rating} />
			</View>
			<Prompt text={review.comment} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingVertical: verticalScale(15),
	},
	row: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'center',
	},
});

export default Review;
