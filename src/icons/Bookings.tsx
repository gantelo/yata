import React from 'react';
import { Path, Svg } from 'react-native-svg';

type BookingsProps = {
	color: string;
};

const Bookings = ({ color }: BookingsProps) => (
	<Svg width="30" height="25" viewBox="0 0 36 30">
		<Path
			d="M3.27273 29.4545H27.8182C28.6862 29.4545 29.5186 29.1097 30.1323 28.496C30.7461 27.8822 31.0909 27.0498 31.0909 26.1818V16.3636H24.5455V19.6364L18 14.7273L24.5455 9.81818V13.0909H31.0909V3.27273C31.0909 2.40475 30.7461 1.57231 30.1323 0.958559C29.5186 0.344804 28.6862 0 27.8182 0H3.27273C2.40475 0 1.57231 0.344804 0.958559 0.958559C0.344804 1.57231 0 2.40475 0 3.27273V26.1818C0 27.0498 0.344804 27.8822 0.958559 28.496C1.57231 29.1097 2.40475 29.4545 3.27273 29.4545ZM3.27273 19.6364H9.81818V22.9091H3.27273V19.6364ZM3.27273 13.0909H14.7273V16.3636H3.27273V13.0909ZM3.27273 6.54545H14.7273V9.81818H3.27273V6.54545ZM31.0909 13.0909H36V16.3636H31.0909V13.0909Z"
			fill={color}
		/>
	</Svg>
);

export default Bookings;