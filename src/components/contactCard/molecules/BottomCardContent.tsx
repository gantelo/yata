import { StyleSheet, View } from 'react-native';

type BottomCardContentProps = {
	leftChildren: React.ReactNode;
	rightChildren?: React.ReactNode;
};

const BottomCardContent = ({ leftChildren, rightChildren }: BottomCardContentProps) => {
	return (
		<View style={styles.container}>
			{leftChildren}
			{rightChildren}
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
});

export default BottomCardContent;
