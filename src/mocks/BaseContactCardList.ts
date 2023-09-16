import { Categories, RecommendedCardModel } from '@types';

export const BaseContactCardList: RecommendedCardModel[] = [
	{
		id: '1',
		name: 'Home Cleaning',
		location: 'Buenos Aires',
		type: Categories.Cleaning,
		rating: 3.2,
		alias: 'Juan pedro',
		price: 24,
	},
	{
		id: '2',
		name: 'Home Painting',
		location: 'Rosario',
		type: Categories.Painting,
	},
	{
		id: '3',
		name: 'Home Cleaning 2',
		location: 'Buenos Aires',
		type: Categories.Cleaning,
	},
	{
		id: '4',
		name: 'Home Painting 2',
		location: 'Rosario',
		type: Categories.Painting,
	},
	{
		id: '5',
		name: 'Home Cleaning 3',
		location: 'Buenos Aires',
		type: Categories.Cleaning,
	},
	{
		id: '7',
		name: 'Home Painting 3',
		location: 'Rosario',
		type: Categories.Painting,
	},
];
