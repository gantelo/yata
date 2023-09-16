import { Image, ImageSourcePropType, ImageStyle, StyleProp } from 'react-native';

type ImageFallbackProps = {
	src?: ImageSourcePropType;
	fallbackSrc: ImageSourcePropType;
	styles?: StyleProp<ImageStyle>;
};

const ImageFallback = ({ src, fallbackSrc, styles }: ImageFallbackProps) => {
	return <Image source={src ?? fallbackSrc} style={styles} />;
};

export default ImageFallback;
