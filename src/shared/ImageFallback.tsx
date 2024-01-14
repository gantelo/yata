import { Image, ImageSourcePropType, ImageStyle, StyleProp } from 'react-native';

import { useToggle } from '@hooks';
import { DefaultPic } from '@icons';

type ImageFallbackProps = {
	src?: ImageSourcePropType;
	fallbackSrc?: ImageSourcePropType;
	styles?: StyleProp<ImageStyle>;
	size: [number, number];
};

const ImageFallback = ({ src, fallbackSrc, size, styles }: ImageFallbackProps) => {
	const [error, toggleError] = useToggle(!src && !fallbackSrc);

	const [height, width] = size;

	if (error) {
		return <DefaultPic size={height} />;
	}

	return <Image source={src ?? fallbackSrc} style={[styles, { height, width }]} onError={toggleError} />;
};

export default ImageFallback;
