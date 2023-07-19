import { atom } from 'recoil';

export const currentCategoryState = atom({
	key: 'CurrentCategory',
	default: 'all-item',
});
