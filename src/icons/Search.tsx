import React from 'react';
import { Path, Svg } from 'react-native-svg';

import { Colors } from '@styles';

type SearchProps = {
	color?: string;
};

const Search = ({ color = Colors.secondary.light }: SearchProps) => (
	<Svg width="17" height="17" viewBox="0 0 17 17">
		<Path
			d="M12.272 12.2717L16.2502 16.25"
			stroke={color}
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<Path
			d="M7.29891 13.5978C10.7777 13.5978 13.5978 10.7777 13.5978 7.29891C13.5978 3.82012 10.7777 1 7.29891 1C3.82012 1 1 3.82012 1 7.29891C1 10.7777 3.82012 13.5978 7.29891 13.5978Z"
			stroke={color}
			fill='#fff'
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</Svg>
);

export default Search;
