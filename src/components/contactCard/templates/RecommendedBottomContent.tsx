import { Image } from 'react-native';

import { PriceContainer } from '../atoms';
import { BottomCardContent } from '../molecules';

type RecommendedBottomContentProps = {
	cardId: string;
	price?: number;
};

const RecommendedBottomContent = ({ price }: RecommendedBottomContentProps) => {
	const left = <PriceContainer price={price} />;
	const right = <Image source={require('@assets/images/right_arrow.png')} />;

	return <BottomCardContent leftChildren={left} rightChildren={right} />;
};

export default RecommendedBottomContent;
