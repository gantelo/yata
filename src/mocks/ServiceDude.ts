import { Categories, Service, ServiceType } from '@types';

export const mockService: Service = {
	id: '1',
	name: 'Mock Service',
	alias: 'Juan Pedro',
	email: 'mockservice@example.com',
	phone: '123-456-7890',
	cost: [100, 200],
	serviceType: ServiceType.Individual,
	category: Categories.Cleaning,
	about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a massa porta arcu viverra tristique. Maecenas luctus pellentesque',
	rating: '4.2',
	bookings: 10,
	responseTime: 1,
	distance: '1.2 km',
	reviews: 20,
	bestReview: {
		id: '1',
		name: 'Mock Review',
		avatar: 'https://picsum.photos/200',
		rating: '4.8',
		date: '2021-01-01',
		comment:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a massa porta arcu viverra tristique. Maecenas luctus pellentesque',
	},
};
