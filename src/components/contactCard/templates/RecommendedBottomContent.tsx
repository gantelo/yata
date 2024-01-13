import { RightArrow } from '@icons';

import { PriceContainer } from '../atoms';
import { BottomCardContent } from '../molecules';

type RecommendedBottomContentProps = {
	cardId: string;
	price?: number;
};

const RecommendedBottomContent = ({ price }: RecommendedBottomContentProps) => {
	const left = <PriceContainer price={price} />;
	const right = <RightArrow />;

	return <BottomCardContent leftChildren={left} rightChildren={right} />;
};

export default RecommendedBottomContent;
