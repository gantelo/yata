import { TruncatePrompt } from '@shared';

type DetailsPromptProps = {
	about: string;
};

// TODO: Add skeleton loader
const DetailsPrompt = ({ about = '' }: DetailsPromptProps) => {
	return <TruncatePrompt about={about} />;
};

export default DetailsPrompt;
