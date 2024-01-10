import { View } from 'react-native';

import { Distance, Price } from '@icons';

import { Info } from '../atoms';

type DetailsInfoProps = {
	distance: string;
	cost?: [number, number];
};

const parseCost = (cost?: [number, number]) => {
	if (cost === undefined) return 'Ask';

	const [min, max] = cost;

	if (min === max) return `$${min}/hr`;
	if (!min) return `$${max}/hr`;
	if (!max) return `$${min}/hr`;

	return `$${min}-${max}/hr`;
};

const DetailsInfo = ({ distance, cost }: DetailsInfoProps) => {
	return (
		<View>
			<Info icon={<Price />} label="Cost" value={parseCost(cost)} />
			<Info icon={<Distance />} label="Distance from you" value={distance} />
		</View>
	);
};

export default DetailsInfo;
