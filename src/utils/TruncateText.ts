export const truncateText = (text: string, length: number, isTruncated = true) => {
	if (text.length > length && isTruncated) {
		return text.slice(0, length) + '...';
	}
	return text;
};
