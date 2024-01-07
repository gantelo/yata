import { Category } from './Categories';

export enum ServiceType {
	Individual = 'Individual',
	Group = 'Group',
	Company = 'Company',
}

export type Service = {
	id: string;
	name: string;
	alias?: string;
	email: string;
	phone: string;
	cost?: [number, number];
	type: ServiceType;
	trade: Category;
	about: string;
	rating: number;
	bookings: number;
	responseTime: number;
	distance: number;
	reviews: number;
};
