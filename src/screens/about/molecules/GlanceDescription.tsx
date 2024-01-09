import { StyleSheet, View } from 'react-native';

import { ServiceType } from '@types';

import { DescriptionInfo, DescriptionName } from '../atoms';

type GlanceDescriptionProps = {
	name: string;
	serviceType: ServiceType;
	category: string;
};

const GlanceDescription = ({ name, serviceType, category }: GlanceDescriptionProps) => {
	return (
		<View style={styles.container}>
			<DescriptionName name={name} />
			<DescriptionInfo serviceType={serviceType} category={category} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 10,
	},
});

export default GlanceDescription;
