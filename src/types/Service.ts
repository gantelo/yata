import { Category } from './Categories';
import { Review } from './Reviews';

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
	rating: string;
	bookings: number;
	responseTime: number;
	distance: string;
	reviews?: number;
	bestReview?: Review;
};
