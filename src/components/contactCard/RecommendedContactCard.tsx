import { useNavigation } from '@react-navigation/native';
import { AboutScreenProp, BaseContactCard, RecommendedCardModel, Routes } from '@types';

import { BaseContactCardTemplate, RecommendedBottomContent } from './templates';

const RecommendedContactCard = (props: RecommendedCardModel) => {
	const navigation = useNavigation<AboutScreenProp>();

	const baseCard: BaseContactCard = {
		id: props.id,
		imgSrc: props.imgSrc,
		name: props.name,
		alias: props.alias,
		location: props.location,
		rating: props.rating,
		type: props.type,
	};

	const handleNavigateToAbout = () => {
		navigation.navigate(Routes.About, { id: baseCard.id, title: baseCard.name });
	};

	return (
		<BaseContactCardTemplate baseCard={baseCard} onCardPress={handleNavigateToAbout}>
			<RecommendedBottomContent cardId={props.id} price={props.price} />
		</BaseContactCardTemplate>
	);
};

export default RecommendedContactCard;
