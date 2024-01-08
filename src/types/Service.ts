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
	serviceType: ServiceType;
	category: Category;
	about: string;
	rating: number;
	bookings: number;
	responseTime: number;
	distance: number;
	reviews: number;
};
