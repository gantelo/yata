import { CText } from '@shared';

type ChatDetailsTitleProps = {
	title?: string;
};

const ChatDetailsTitle = ({ title }: ChatDetailsTitleProps) => {
	return <CText variant="title">{title ?? 'Chat'}</CText>;
};

export default ChatDetailsTitle;
