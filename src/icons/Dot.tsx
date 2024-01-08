import React from 'react';
import { Circle, Svg } from 'react-native-svg';

type DotProps = {
	color: string;
};

const Dot = ({ color }: DotProps) => (
	<Svg width="5" height="5" viewBox="0 0 5 5">
		<Circle cx="2.5" cy="2.5" r="2.5" fill={color} />
	</Svg>
);

export default Dot;
