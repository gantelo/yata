import { CText } from '@shared';
import { Colors } from '@styles';

type DescriptionNameProps = {
	name: string;
};

const DescriptionName = ({ name }: DescriptionNameProps) => {
	return (
		<CText weight="bold" color={Colors.secondary.normal} fontSize="lg">
			{name}
		</CText>
	);
};

export default DescriptionName;
