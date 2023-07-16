import React from 'react';
import { Rect, Svg } from 'react-native-svg';

import { Colors } from '@styles';

const Boxes = () => (
	<Svg
		width="25"
		height="25"
		viewBox="0 0 25 25"
	>
		<Rect width="11.0714" height="11.0714" rx="2" fill={Colors.secondary.normal} />
		<Rect x="13.9287" y="13.9286" width="11.0714" height="11.0714" rx="2" fill={Colors.secondary.normal} />
		<Rect y="13.9286" width="11.0714" height="11.0714" rx="2" fill={Colors.secondary.normal} />
		<Rect x="13.9287" width="11.0714" height="11.0714" rx="2" fill={Colors.secondary.normal} fill-opacity="0.6" />
	</Svg>
);

export default Boxes;
