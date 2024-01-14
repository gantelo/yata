import React from 'react';
import { Path, Svg } from 'react-native-svg';

import { Colors } from '@styles';

type ClearProps = {
	color?: string;
};

const Clear = ({ color = Colors.secondary.light }: ClearProps) => (
	<Svg width="16" height="16" viewBox="0 0 16 16">
		<Path
			d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM4.22 4.22C4.36063 4.07955 4.55125 4.00066 4.75 4.00066C4.94875 4.00066 5.13937 4.07955 5.28 4.22L8 6.94L10.72 4.22C10.7887 4.14631 10.8715 4.08721 10.9635 4.04622C11.0555 4.00523 11.1548 3.98319 11.2555 3.98141C11.3562 3.97963 11.4562 3.99816 11.5496 4.03588C11.643 4.0736 11.7278 4.12974 11.799 4.20096C11.8703 4.27218 11.9264 4.35701 11.9641 4.4504C12.0018 4.54379 12.0204 4.64382 12.0186 4.74452C12.0168 4.84523 11.9948 4.94454 11.9538 5.03654C11.9128 5.12854 11.8537 5.21134 11.78 5.28L9.06 8L11.78 10.72C11.8537 10.7887 11.9128 10.8715 11.9538 10.9635C11.9948 11.0555 12.0168 11.1548 12.0186 11.2555C12.0204 11.3562 12.0018 11.4562 11.9641 11.5496C11.9264 11.643 11.8703 11.7278 11.799 11.799C11.7278 11.8703 11.643 11.9264 11.5496 11.9641C11.4562 12.0018 11.3562 12.0204 11.2555 12.0186C11.1548 12.0168 11.0555 11.9948 10.9635 11.9538C10.8715 11.9128 10.7887 11.8537 10.72 11.78L8 9.06L5.28 11.78C5.13783 11.9125 4.94978 11.9846 4.75548 11.9812C4.56118 11.9777 4.37579 11.899 4.23838 11.7616C4.10097 11.6242 4.02225 11.4388 4.01883 11.2445C4.0154 11.0502 4.08752 10.8622 4.22 10.72L6.94 8L4.22 5.28C4.07955 5.13937 4.00066 4.94875 4.00066 4.75C4.00066 4.55125 4.07955 4.36063 4.22 4.22Z"
			fill={color}
			fillRule="evenodd"
			clipRule="evenodd"
		/>
	</Svg>
);

export default Clear;
