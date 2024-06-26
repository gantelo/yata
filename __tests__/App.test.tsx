/**
 * @format
 */
import React from 'react';
import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { RecoilRoot } from 'recoil';

// Note: import explicitly to use the types shiped with jest.
import { it } from '@jest/globals';

import App from '../App';

it('renders correctly', () => {
	renderer.create(
		<RecoilRoot>
			<App />
		</RecoilRoot>
	);
});
