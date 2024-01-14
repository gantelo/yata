import { StyleSheet, View } from 'react-native';

import { SearchInput } from '@shared';

const Search = () => {
	return (
		<View style={styles.container}>
			<SearchInput />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingVertical: 10,
		zIndex: 1,
	},
});

export default Search;
