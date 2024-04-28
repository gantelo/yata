import { ProfileImage } from '@components';
import { Category } from '@types';

type GlanceProfilePicProps = {
	imgSrc: string;
	category: Category;
};

const GlanceProfilePic = ({ imgSrc, category }: GlanceProfilePicProps): React.JSX.Element => {
	return <ProfileImage imgSrc={imgSrc} category={category} />;
};

export default GlanceProfilePic;
