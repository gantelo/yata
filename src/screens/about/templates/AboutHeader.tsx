import { MidHeader } from '@components';

import { useAboutContext } from '../Context';
import { AboutBgImage, HeaderContent } from '../molecules';

const AboutHeader = () => {
	const { name } = useAboutContext();

	return (
		<MidHeader HeaderImage={AboutBgImage}>
			<HeaderContent title={name} />
		</MidHeader>
	);
};

export default AboutHeader;
