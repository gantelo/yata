import { useRef, useState } from 'react';
import { StyleProp, StyleSheet, TextInput, TextStyle, TouchableOpacity, View } from 'react-native';

import { Clear, Search } from '@icons';
import { Colors, Sizes } from '@styles';

type SearchInputProps = {
	styles?: StyleProp<TextStyle>;
};

const SearchInput = ({ styles }: SearchInputProps) => {
	const [text, onChangeText] = useState('');

	const inputRef = useRef<TextInput>(null);

	const handleClear = () => {
		onChangeText('');
		inputRef.current?.blur();
	};

	return (
		<View style={defaultStyles.searchSection}>
			<TextInput
				ref={inputRef}
				style={[defaultStyles.input, styles]}
				onChangeText={onChangeText}
				value={text}
				placeholder="Search message..."
				placeholderTextColor={Colors.secondary.light}
				autoCorrect={false}
			/>
			<View style={defaultStyles.searchIcon}>
				<Search />
			</View>
			{/* TODO: add in/out animation */}
			{text.length > 0 && (
				<TouchableOpacity style={defaultStyles.clearIcon} onPress={handleClear}>
					<Clear />
				</TouchableOpacity>
			)}
		</View>
	);
};

const defaultStyles = StyleSheet.create({
	input: {
		borderWidth: 1,
		paddingVertical: 10,
		paddingLeft: 35,
		paddingRight: 10,
		zIndex: 1,
		backgroundColor: 'white',
		borderRadius: Sizes.border.default,
		borderColor: Colors.bg.default,
		fontWeight: '600',
		color: Colors.secondary.normal,
		width: '100%',
	},
	searchSection: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	searchIcon: {
		position: 'absolute',
		zIndex: 2,
		left: 10,
	},
	clearIcon: {
		position: 'absolute',
		zIndex: 2,
		right: 10,
	},
});

export default SearchInput;
