import { LowHeader } from '@components';

import { useAboutContext } from '../Context';
import { HeaderContent } from '../molecules';

const AboutHeader = () => {
	const { name } = useAboutContext();

	return (
		<LowHeader>
			<HeaderContent title={name} />
		</LowHeader>
	);
};

export default AboutHeader;
