/**
 * Code from: https://docs.astro.build/es/recipes/i18n/
 */

import { ui, DEFAULT_LANG } from "./ui";
import type { Lang } from "./ui";

export type TranslateKey = keyof (typeof ui)[Lang];

export function getLangFromUrl(url: URL) {
	const [, lang] = url.pathname.split("/");

	if (lang in ui) return lang as Lang;

	return DEFAULT_LANG;
}

export function useTranslations(lang: Lang) {
	return function t(key: TranslateKey) {
		return ui[lang][key] || ui[DEFAULT_LANG][key];
	};
}
