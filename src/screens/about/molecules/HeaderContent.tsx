import { StyleSheet, View } from 'react-native';

import { AboutTitle, Back } from '../atoms';

type HeaderContentProps = {
	title?: string;
};

const HeaderContent = ({ title }: HeaderContentProps) => {
	return (
		<View style={styles.container}>
			<Back />
			<AboutTitle title={title} />
			<View style={styles.middler} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	middler: {
		flex: 1,
	},
});

export default HeaderContent;
