import { CText } from '@shared';

type AboutTitleProps = {
	title?: string;
};

const AboutTitle = ({ title }: AboutTitleProps) => {
	return <CText variant="title">{title ?? 'About'}</CText>;
};

export default AboutTitle;
