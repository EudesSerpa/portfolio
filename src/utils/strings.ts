export function toKebabCase(text: string): string {
	return text.replaceAll(/\s+/g, "-");
}

export function getParagraphs(
	text: string,
	separator: string = "---"
): string[] {
	return text.split(separator);
}
