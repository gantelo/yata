import React from 'react';

import { CText } from '@shared';
import { Colors } from '@styles';

type PromptProps = {
	about: string;
	shouldTruncate: boolean;
	isTruncated: boolean;
};

//TODO: add animation on isTruncated effect
const Prompt = ({ about, shouldTruncate, isTruncated }: PromptProps) => {
	return (
		<>
			{about}
			{shouldTruncate && (
				<>
					<CText fontSize="lg" color={Colors.primary.normal} weight="semibold">
						{'   '}
						View {isTruncated ? 'More' : 'Less'}
					</CText>
				</>
			)}
		</>
	);
};

export default Prompt;
