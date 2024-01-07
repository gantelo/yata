import React, { memo, useEffect, useState } from 'react';
import { mockService } from 'src/mocks/ServiceDude';

import { useRoute } from '@react-navigation/native';
import { AboutScreenRouteProp, Service } from '@types';

import { AboutContext } from './Context';
import { AboutGlance, AboutHeader } from './templates';

const About = () => {
	const { params } = useRoute<AboutScreenRouteProp>();
	const [service, setCurrentService] = useState<Service>(params as unknown as Service);

	useEffect(() => {
		setTimeout(() => {
			setCurrentService(mockService);
		}, 900);
	}, [params.id]);

	return (
		<AboutContext.Provider value={service}>
			<>
				<AboutHeader />
				<AboutGlance />
			</>
		</AboutContext.Provider>
	);
};

export default memo(About);
