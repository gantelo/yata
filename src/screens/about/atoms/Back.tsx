import { StyleSheet } from 'react-native';

import { CaretLeft } from '@icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableIcon } from '@shared';

const Back = () => {
	const navigation = useNavigation();

	const handleBack = () => {
		navigation.goBack();
	};

	return <TouchableIcon Icon={CaretLeft} style={styles.middler} onPress={handleBack} />;
};

const styles = StyleSheet.create({
	middler: {
		flex: 1,
	},
});

export default Back;
