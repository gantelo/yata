import { Categories, Service, ServiceType } from '@types';

export const mockService: Service = {
	id: '1',
	name: 'Mock Service',
	alias: 'Juan Pedro',
	email: 'mockservice@example.com',
	phone: '123-456-7890',
	cost: [100, 200],
	type: ServiceType.Individual,
	trade: Categories.Cleaning,
	about: 'This is a mock service',
	rating: 5,
	bookings: 10,
	responseTime: 1,
	distance: 1,
	reviews: 20,
};
