import { Category } from './Categories';
import { ServiceType } from './Service';

export type BaseContactCard = {
	id: string;
	imgSrc?: string;
	name: string;
	alias?: string;
	location: string;
	rating?: number;
	category: Category;
};

export type RecommendedCardModel = BaseContactCard & {
	price?: number;
	serviceType: ServiceType;
};
