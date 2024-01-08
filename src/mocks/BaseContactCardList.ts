import { Categories, RecommendedCardModel, ServiceType } from '@types';

export const BaseContactCardList: RecommendedCardModel[] = [
	{
		id: '1',
		name: 'Home Cleaning',
		location: 'Buenos Aires',
		category: Categories.Cleaning,
		rating: 3.2,
		alias: 'Juan pedro',
		price: 24,
		serviceType: ServiceType.Group,
	},
	{
		id: '2',
		name: 'Home Painting',
		location: 'Rosario',
		category: Categories.Painting,
		serviceType: ServiceType.Individual,
	},
	{
		id: '3',
		name: 'Home Cleaning 2',
		location: 'Buenos Aires',
		category: Categories.Cleaning,
		serviceType: ServiceType.Individual,
	},
	{
		id: '4',
		name: 'Home Painting 2',
		location: 'Rosario',
		category: Categories.Painting,
		serviceType: ServiceType.Individual,
	},
	{
		id: '5',
		name: 'Home Cleaning 3',
		location: 'Buenos Aires',
		category: Categories.Cleaning,
		serviceType: ServiceType.Individual,
	},
	{
		id: '7',
		name: 'Home Painting 3',
		location: 'Rosario',
		category: Categories.Painting,
		serviceType: ServiceType.Individual,
	},
];
