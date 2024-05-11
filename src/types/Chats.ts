export type ChatCard = {
	id: string;
	avatar: string;
	name: string;
	lastMessage: string;
	time: string;
	unread: number;
};

export enum ChatDirection {
	Left = 'left',
	Right = 'right',
}

export type ChatMessage = {
	id: string;
	message: string;
	time: string;
	direction: ChatDirection;
	read: boolean;
};
