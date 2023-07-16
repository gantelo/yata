import { Header } from '@components';

import { HeaderIcons, HeaderText, HomeBgImage } from '../molecules';

const HomeHeader = () => {
	return (
		<Header HeaderImage={HomeBgImage}>
			<HeaderIcons />
			<HeaderText />
		</Header>
	);
};

export default HomeHeader;
