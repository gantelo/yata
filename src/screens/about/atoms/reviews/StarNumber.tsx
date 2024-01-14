import { StyleSheet } from 'react-native';

import { Star } from '@icons';
import { CText } from '@shared';
import { Colors } from '@styles';

interface StarNumberProps {
	rating: string;
}

const StarNumber = ({ rating }: StarNumberProps) => {
	return (
		<>
			<Star color={Colors.misc.starYellow} size={18} />
			<CText style={styles.txt} weight="bold" color={Colors.secondary.normal} fontSize="lg">
				{rating}
			</CText>
		</>
	);
};

const styles = StyleSheet.create({
	txt: {
		marginLeft: 10,
	},
});

export default StarNumber;
