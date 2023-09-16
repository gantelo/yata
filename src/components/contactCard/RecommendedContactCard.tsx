import { BaseContactCard, RecommendedCardModel } from '@types';

import { BaseContactCardTemplate, RecommendedBottomContent } from './templates';

const RecommendedContactCard = (props: RecommendedCardModel) => {
	const baseCard: BaseContactCard = {
		id: props.id,
		imgSrc: props.imgSrc,
		name: props.name,
		alias: props.alias,
		location: props.location,
		rating: props.rating,
		type: props.type,
	};

	return (
		<BaseContactCardTemplate baseCard={baseCard}>
			<RecommendedBottomContent cardId={props.id} price={props.price} />
		</BaseContactCardTemplate>
	);
};

export default RecommendedContactCard;
