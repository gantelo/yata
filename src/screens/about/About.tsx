import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { mockService } from 'src/mocks/ServiceDude';

import { useRoute } from '@react-navigation/native';
import { HorizontalDivider } from '@shared';
import { Colors } from '@styles';
import { AboutScreenRouteProp, Service } from '@types';

import { AboutContext } from './Context';
import { AboutDetails, AboutGlance, AboutHeader, AboutReviews } from './templates';

const About = () => {
	const { params } = useRoute<AboutScreenRouteProp>();
	const [service, setCurrentService] = useState<Service>(params as unknown as Service);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setCurrentService(mockService);
			setLoading(false);
		}, 900);
	}, [params.id]);

	return (
		<AboutContext.Provider value={{ ...service, loading }}>
			<View style={styles.container}>
				<AboutHeader />
				<ScrollView showsVerticalScrollIndicator={false}>
					<AboutGlance />
					<HorizontalDivider />
					<AboutDetails />
					<HorizontalDivider />
					<AboutReviews />
				</ScrollView>
			</View>
		</AboutContext.Provider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		zIndex: 0,
		backgroundColor: Colors.bg.root,
	},
});

export default About;
