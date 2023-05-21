//

//
export function createSlug(str: string, withLowerCase: boolean = false): string {
	let temp = str;
	if (withLowerCase) {
		temp = str.toLowerCase();
	}
	let slug = temp.split(' ');
	return slug.join('-');
}

export function parseSlug(str: string): string {
	let temp = str.split('-');
	return temp.join(' ');
}
