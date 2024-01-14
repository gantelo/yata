import React from 'react';
import { StyleSheet, View } from 'react-native';

import { TruncatePrompt } from '@shared';
import { verticalScale } from '@styles';

type PromptProps = {
	text: string;
};

const Prompt = ({ text }: PromptProps) => {
	return (
		<View style={styles.container}>
			<TruncatePrompt about={text} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingLeft: verticalScale(15),
		paddingRight: verticalScale(15),
	},
});

export default Prompt;
