/**
 * Selects one element with the specified selector
 *
 * @param {string} selector - The CSS selector
 * @returns {Element | null} - The selected element
 */
export function $(selector: string): Element | null {
	return document.querySelector(selector);
}

/**
 * Selects all elements with the specified selector
 *
 * @param {string} selector - The CSS selector
 * @returns {NodeListOf<Element> | null} - The selected elements
 */
export function $$(selector: string): NodeListOf<Element> | null {
	return document.querySelectorAll(selector);
}
