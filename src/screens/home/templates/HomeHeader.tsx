import { Header } from '@components';

import { GetStarted, HeaderIcons, HeaderText, HomeBgImage } from '../molecules';

const HomeHeader = () => {
	return (
		<Header HeaderImage={HomeBgImage}>
			<HeaderIcons />
			<HeaderText />
			<GetStarted />
		</Header>
	);
};

export default HomeHeader;
