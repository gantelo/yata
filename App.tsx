import React from 'react';
import { RecoilRoot } from 'recoil';
import MainNavigator from 'src/navigation/MainNavigator';

function App(): JSX.Element {
	return (
		<RecoilRoot>
			<MainNavigator />
		</RecoilRoot>
	);
}

export default App;
