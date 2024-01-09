import React, { memo, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { mockService } from 'src/mocks/ServiceDude';

import { useRoute } from '@react-navigation/native';
import { Colors } from '@styles';
import { AboutScreenRouteProp, Service } from '@types';

import { AboutContext } from './Context';
import { AboutGlance, AboutHeader } from './templates';

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
				<AboutGlance />
			</View>
		</AboutContext.Provider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.bg.root,
	},
});

export default memo(About);
