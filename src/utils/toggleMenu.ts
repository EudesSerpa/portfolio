import { clientTranslation } from "@utils/clientTranslation";

/**
 * Toggles the menu
 *
 * @param {HTMLElement} menu - The menu element
 * @param {HTMLButtonElement} toggleButton - The toggle button element
 */
export function toggleMenu(
	menu: HTMLElement,
	toggleButton: HTMLButtonElement
): void {
	const ACTIVE_CLASS = "open";
	const t = clientTranslation(menu.dataset.lang);

	/**
	 * Set the accessible attributes to the toggle button
	 *
	 * @param {boolean} isExpanded - Indicates if the menu is expanded
	 */
	const setToggleAccessibleAttributes = (isExpanded: boolean) => {
		const label = isExpanded
			? t("i11n.menu.expanded.label")
			: t("i11n.menu.no.expanded.label");

		toggleButton.setAttribute("aria-expanded", String(isExpanded));
		toggleButton.setAttribute("aria-label", label);
	};

	/**
	 * Manage "keyup" event listeners
	 *
	 * @param {boolean} isExpanded - Indicates if the menu is expanded
	 */
	const manageKeyUpEventListener = (isExpanded: boolean) => {
		isExpanded
			? window.addEventListener("keyup", handleKeyUp)
			: window.removeEventListener("keyup", handleKeyUp);
	};

	/**
	 * Close the menu
	 */
	const closeMenu = () => {
		menu.classList.remove(ACTIVE_CLASS);
		setToggleAccessibleAttributes(false);
		manageKeyUpEventListener(false);
		manageFocusOnClose();
	};

	/**
	 * Open the menu
	 */
	const openMenu = () => {
		menu.classList.add(ACTIVE_CLASS);
		setToggleAccessibleAttributes(true);
		manageKeyUpEventListener(true);
	};

	/**
	 * Manage focus when closing the menu
	 */
	const manageFocusOnClose = () => {
		const currentActiveElement = document.activeElement as HTMLElement;

		const isVisible = currentActiveElement.checkVisibility({
			checkVisibilityCSS: true,
			checkOpacity: true,
		});

		isVisible ? currentActiveElement.focus() : toggleButton.focus();
	};

	/**
	 * Close the menu by pressing the "Escape" key
	 *
	 * @param {KeyboardEvent} event - The keyup event object
	 */
	const handleKeyUp = ({ key }: KeyboardEvent) => {
		if (key !== "Escape") return;
		closeMenu();
	};

	/**
	 * Toggle the {{ ACTIVE_CLASS }} and open/close the menu accordingly
	 *
	 * @param {MouseEvent} _event - The click event object
	 */
	const handleToggleClick = (_event: MouseEvent) => {
		const isExpanded = menu.classList.toggle(ACTIVE_CLASS);
		isExpanded ? openMenu() : closeMenu();
	};

	/**
	 * Close the menu when an option is selected
	 *
	 * @param {MouseEvent} event - The click event object
	 */
	const handleMenuSelection = (event: MouseEvent) => {
		const target = event.target as Element;
		if (target.tagName !== "A") return;

		closeMenu();
	};

	toggleButton.addEventListener("click", handleToggleClick);
	menu.addEventListener("click", handleMenuSelection);
}
