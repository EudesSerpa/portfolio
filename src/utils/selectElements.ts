/**
 * Selects one element with the specified selector
 *
 * @param {string} selector - The CSS selector
 * @param {HTMLElement | Document} [node=document] - The CSS selector
 * @returns {Element | null} - The selected element
 */
export function $(
	selector: string,
	node: HTMLElement | Document = document
): Element | null {
	return node.querySelector(selector);
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
