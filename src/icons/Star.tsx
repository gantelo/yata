import React from 'react';
import { Path, Svg } from 'react-native-svg';

type StarProps = {
	color: string;
	size?: number;
};

const Star = ({ color, size = 25 }: StarProps) => (
	<Svg width={size} height={size * 0.95} viewBox="0 0 25 23">
		<Path
			d="M12.5 19.2618L18.5623 22.7914C19.6725 23.4383 21.0311 22.4821 20.7389 21.2727L19.132 14.6353L24.4932 10.1635C25.4719 9.3479 24.946 7.80105 23.6605 7.70261L16.6048 7.12606L13.8439 0.854283C13.3473 -0.284761 11.6527 -0.284761 11.1561 0.854283L8.39515 7.112L1.33949 7.68855C0.0539875 7.78699 -0.471901 9.33384 0.506835 10.1494L5.86797 14.6213L4.26109 21.2586C3.96893 22.468 5.32747 23.4242 6.43768 22.7774L12.5 19.2618Z"
			fill={color}
		/>
	</Svg>
);

export default Star;
