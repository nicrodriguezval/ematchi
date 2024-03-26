export function shuffle<T>(array: T[]) {
	let i = array.length;

	while (i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}

	return array;
}