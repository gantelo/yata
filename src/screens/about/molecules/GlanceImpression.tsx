import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Booking, Clock, Star } from '@icons';
import { VerticalDivider } from '@shared';
import { Colors, horizontalScale, verticalScale } from '@styles';

import { Impression } from '../atoms';

type GlanceImpressionProps = {
	bookings: number;
	responseTime: number;
	rating: string;
	loading: boolean;
};

const GlanceImpression = ({ bookings, responseTime, rating, loading }: GlanceImpressionProps) => {
	return (
		<View style={styles.container}>
			<Impression
				label="rating"
				value={parseFloat(rating).toFixed(1)}
				icon={<Star color={Colors.misc.starYellow} />}
				loading={loading}
			/>
			<VerticalDivider marginHorizontal={0} />
			<Impression
				label="bookings"
				value={`${bookings}`}
				icon={<Booking color={Colors.secondary.normalLight} />}
				loading={loading}
			/>
			<VerticalDivider marginHorizontal={0} />
			<Impression
				label="response"
				value={`${responseTime}m`}
				icon={<Clock color={Colors.secondary.normalLight} />}
				loading={loading}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: verticalScale(35),
		//TODO: check for this on bigger devices
		paddingHorizontal: horizontalScale(35),
	},
});

export default GlanceImpression;
