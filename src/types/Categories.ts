import { ImageSourcePropType } from 'react-native';

export const Categories = {
	All: 'All',
	Cleaning: 'Cleaning',
	Repairing: 'Repairing',
	'IT & Tech': 'IT & Tech',
	Painting: 'Painting',
	Tailor: 'Tailor',
	Tutor: 'Tutor',
	Mechanic: 'Mechanic',
	Vet: 'Vet',
	Lawyer: 'Lawyer',
	Accountant: 'Accountant',
	Others: 'Others',
} as const;

export type Category = keyof typeof Categories;

export type CategoryPicker = {
	imgSrc: ImageSourcePropType;
	label: Category;
	key: string;
};

export const DefaultCategories: CategoryPicker[] = [
	{
		imgSrc: require('@assets/images/default-categories/all.png'),
		label: Categories.All,
		key: 'all-item',
	},
	{
		imgSrc: require('@assets/images/default-categories/cleaning.png'),
		label: Categories.Cleaning,
		key: 'cleaning-item',
	},
	{
		imgSrc: require('@assets/images/default-categories/appliances.png'),
		label: Categories.Repairing,
		key: 'repairing-item',
	},
	{
		imgSrc: require('@assets/images/default-categories/computer.png'),
		label: Categories['IT & Tech'],
		key: 'itrepairing-item',
	},
	{
		imgSrc: require('@assets/images/default-categories/painter.png'),
		label: Categories.Painting,
		key: 'painting-item',
	},
	{
		imgSrc: require('@assets/images/default-categories/tailor.png'),
		label: Categories.Tailor,
		key: 'tailor-item',
	},
	{
		imgSrc: require('@assets/images/default-categories/tutor.png'),
		label: Categories.Tutor,
		key: 'tutor-item',
	},
	{
		imgSrc: require('@assets/images/default-categories/mechanic.png'),
		label: Categories.Mechanic,
		key: 'mechanic-item',
	},
	{
		imgSrc: require('@assets/images/default-categories/vet.png'),
		label: Categories.Vet,
		key: 'vet-item',
	},
	{
		imgSrc: require('@assets/images/default-categories/lawyer.png'),
		label: Categories.Lawyer,
		key: 'lawyer-item',
	},
	{
		imgSrc: require('@assets/images/default-categories/accountant.png'),
		label: Categories.Accountant,
		key: 'accountant-item',
	},
	{
		imgSrc: require('@assets/images/default-categories/others.png'),
		label: Categories.Others,
		key: 'others-item',
	},
];
