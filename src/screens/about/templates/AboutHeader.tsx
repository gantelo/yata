import { MidHeader } from '@components';

import { AboutBgImage, HeaderContent } from '../molecules';

type AboutHeaderProps = {
	title?: string;
};

const AboutHeader = ({ title }: AboutHeaderProps) => {
	return (
		<MidHeader HeaderImage={AboutBgImage}>
			<HeaderContent title={title} />
		</MidHeader>
	);
};

export default AboutHeader;
