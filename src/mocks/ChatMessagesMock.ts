import { ChatDirection, ChatMessage } from '@types';

export const MockMessages: ChatMessage[] = [
	{
		id: '1',
		message: 'Hey, how are you?',
		time: '10:00',
		direction: ChatDirection.Right,
		read: true,
	},
	{
		id: '2',
		message: "I'm good, thanks! How about you?",
		time: '10:05',
		direction: ChatDirection.Left,
		read: true,
	},
	{
		id: '3',
		message: "I'm doing well, thanks for asking.",
		time: '10:10',
		direction: ChatDirection.Right,
		read: true,
	},

	{
		id: '4',
		message: "Btw on my way.",
		time: '10:10',
		direction: ChatDirection.Right,
		read: true,
	},
	{
		id: '5',
		message: 'Great to hear! Do you have plans for the weekend?',
		time: '10:15',
		direction: ChatDirection.Left,
		read: false,
	},
];
