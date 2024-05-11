import { LowHeader } from '@components';
import { useRoute } from '@react-navigation/native';
import { ChatDetailsRouteProp } from '@types';

import { HeaderContent } from '../molecules';

const ChatDetailsHeader = () => {
	const { params } = useRoute<ChatDetailsRouteProp>();

	return (
		<LowHeader HeaderImage={() => <></>}>
			<HeaderContent title={params.name} avatarSrc={params.avatar} />
		</LowHeader>
	);
};

export default ChatDetailsHeader;
