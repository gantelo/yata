import { ImageSourcePropType } from 'react-native';

export type Category = {
	imgSrc: ImageSourcePropType;
	label: string;
	key: string;
};

export const DefaultCategories: Category[] = [
	{
		imgSrc: require('@assets/images/default-categories/cleaning.png'),
		label: 'Cleaning',
		key: 'cleaning-item',
	},
	{
		imgSrc: require('@assets/images/default-categories/appliances.png'),
		label: 'Repairing',
		key: 'repairing-item',
	},
	{
		imgSrc: require('@assets/images/default-categories/computer.png'),
		label: 'IT & Tech',
		key: 'itrepairing-item',
	},
	{
		imgSrc: require('@assets/images/default-categories/painter.png'),
		label: 'Painting',
		key: 'painting-item',
	},
	{
		imgSrc: require('@assets/images/default-categories/tailor.png'),
		label: 'Tailor',
		key: 'tailor-item',
	},
	{
		imgSrc: require('@assets/images/default-categories/tutor.png'),
		label: 'Tutor',
		key: 'tutor-item',
	},
	{
		imgSrc: require('@assets/images/default-categories/mechanic.png'),
		label: 'Mechanic',
		key: 'mechanic-item',
	},
	{
		imgSrc: require('@assets/images/default-categories/vet.png'),
		label: 'Vet',
		key: 'vet-item',
	},
	{
		imgSrc: require('@assets/images/default-categories/lawyer.png'),
		label: 'Lawyer',
		key: 'lawyer-item',
	},
	{
		imgSrc: require('@assets/images/default-categories/accountant.png'),
		label: 'Accountant',
		key: 'accountant-item',
	},
	{
		imgSrc: require('@assets/images/default-categories/others.png'),
		label: 'Others',
		key: 'others-item',
	},
];
