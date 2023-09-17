import { useRoute } from '@react-navigation/native';
import { AboutScreenRouteProp } from '@types';

import { AboutHeader } from './templates';

const About = () => {
	const {
		params: { title },
	} = useRoute<AboutScreenRouteProp>();

	return (
		<>
			<AboutHeader title={title} />
		</>
	);
};

export default About;
