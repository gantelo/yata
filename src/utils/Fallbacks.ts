import { ImageSourcePropType } from 'react-native';

import { Categories, Category } from '@types';

export const getFallbackImage = (type: Category): ImageSourcePropType => {
	switch (type) {
		case Categories.Cleaning:
			return require('@assets/images/fallbacks/cleaner.png');
		case Categories.Painting:
			return require('@assets/images/fallbacks/painter.png');
		default:
			return require('@assets/images/fallbacks/cleaner.png');
	}
};
