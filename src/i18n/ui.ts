/**
 * Code from: https://docs.astro.build/es/recipes/i18n/
 */

import { enTranslations } from "./locales/en/translation";
import { esTranslations } from "./locales/es/translation";

export type Lang = keyof typeof languages;

export const enum langTags {
	EN = "en",
	ES = "es",
}

export const languages = {
	[langTags.EN]: "English",
	[langTags.ES]: "Spanish",
};

export const DEFAULT_LANG: Lang = langTags.ES;

export const ui = {
	[langTags.EN]: enTranslations,
	[langTags.ES]: esTranslations,
} as const;
