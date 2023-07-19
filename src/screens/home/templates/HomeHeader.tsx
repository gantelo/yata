import { useSharedValue } from 'react-native-reanimated';

import { Header, HeaderContext } from '@components';

import { GetStarted, HeaderIcons, HeaderText, HomeBgImage } from '../molecules';

const HomeHeader = () => {
	const headerScale = useSharedValue(100);

	return (
		<HeaderContext.Provider value={headerScale}>
			<Header HeaderImage={HomeBgImage}>
				<HeaderIcons />
				<HeaderText />
				<GetStarted />
			</Header>
		</HeaderContext.Provider>
	);
};

export default HomeHeader;
