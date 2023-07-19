import { useHomeAnimations } from '@hooks';
import { Boxes } from '@icons';
import { TouchableIcon } from '@shared';

const BoxesButton = () => {
	const { handleShowHeader } = useHomeAnimations();

	return <TouchableIcon Icon={Boxes} onPress={handleShowHeader} />;
};

export default BoxesButton;
