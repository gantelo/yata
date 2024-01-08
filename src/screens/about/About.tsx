import React, { memo, useEffect, useState } from 'react';
import { mockService } from 'src/mocks/ServiceDude';

import { useRoute } from '@react-navigation/native';
import { AboutScreenRouteProp, Service } from '@types';

import { AboutContext } from './Context';
import { AboutGlance, AboutHeader } from './templates';

const About = () => {
	const { params } = useRoute<AboutScreenRouteProp>();
	const [service, setCurrentService] = useState<Service>(params as unknown as Service);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setLoading(true);
			setCurrentService(mockService);
			setLoading(false);
		}, 900);
	}, [params.id]);

	return (
		<AboutContext.Provider value={{ ...service, loading }}>
			<>
				<AboutHeader />
				<AboutGlance />
			</>
		</AboutContext.Provider>
	);
};

export default memo(About);
