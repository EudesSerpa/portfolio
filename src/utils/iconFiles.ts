import type { AstroInstance } from "astro";

export function getIconName(icon: AstroInstance): string {
	return icon.file.split("/").at(-1)?.split(".").at(0) ?? "";
}

export function formatIconName(name: string): string {
	return name.replaceAll("-", " ");
}

export function createTechIconsObject(
	techIconComponents: AstroInstance[]
): Record<string, AstroInstance> {
	const techIconsEntries: [string, AstroInstance][] = techIconComponents.map(
		(icon) => [formatIconName(getIconName(icon)), icon]
	);

	return Object.fromEntries(techIconsEntries);
}
