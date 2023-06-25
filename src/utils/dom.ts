/**
 * Checks if an element is overflowing
 *
 * @param {HTMLElement} element - The element to check
 * @returns {boolean} - A boolean indicating if the element is overflowing
 */
export function isOverflowing(element: HTMLElement): boolean {
	return element.scrollWidth > element.offsetWidth;
}

/**
 * Adds CSS class to the element
 *
 * @param {HTMLElement} element - The element to add the class to
 * @param {string} className - The CSS class name
 */
export function addClass(element: HTMLElement, className: string): void {
	element.classList.add(className);
}

/**
 * Removes CSS class from the element
 *
 * @param {HTMLElement} element - The element to remove the class from
 * @param {string} className - The CSS class name
 */
export function removeClass(element: HTMLElement, className: string): void {
	element.classList.remove(className);
}

/**
 * Disables the button
 *
 * @param {HTMLButtonElement} button - The button element
 */
export function disableButton(button: HTMLButtonElement): void {
	button.disabled = true;
}

/**
 * Enables the button
 *
 * @param {HTMLButtonElement} button - The button element
 */
export function enableButton(button: HTMLButtonElement): void {
	button.disabled = false;
}
