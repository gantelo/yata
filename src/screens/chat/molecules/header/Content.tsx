import { StyleSheet, View } from 'react-native';

import { Title } from '../../atoms';

type HeaderContentProps = {
	title?: string;
};

const HeaderContent = ({ title }: HeaderContentProps) => {
	return (
		<View style={styles.container}>
			<Title />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		justifyContent: 'space-between',
	},
});

export default HeaderContent;
