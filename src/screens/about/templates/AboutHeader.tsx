import { LowHeader } from '@components';

import { useAboutContext } from '../Context';
import { AboutBgImage, HeaderContent } from '../molecules';

const AboutHeader = () => {
	const { name } = useAboutContext();

	return (
		<LowHeader HeaderImage={AboutBgImage}>
			<HeaderContent title={name} />
		</LowHeader>
	);
};

export default AboutHeader;
