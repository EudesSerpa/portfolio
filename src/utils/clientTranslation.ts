import { DEFAULT_LANG, langTags } from "@i18n/ui";
import { useTranslations } from "@i18n/utils";
import type { TranslateKey } from "@i18n/utils";

/**
 * Serve the t function in the client
 *
 * @param { string } [lang=DEFAULT_LANG] - Current language tag
 * @returns {(key: TranslateKey) => string} - Translation function
 */
export const clientTranslation = (
	lang: string = DEFAULT_LANG
): ((key: TranslateKey) => string) => {
	return useTranslations(lang as langTags);
};
