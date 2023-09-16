import { Category } from './Categories';

export type BaseContactCard = {
	id: string;
	imgSrc?: string;
	name: string;
	alias?: string;
	location: string;
	rating?: number;
	type: Category;
};
