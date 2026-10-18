// Controlador: escucha interacciones y coordina el estado con la vista.
import { getState, getVisibleProducts, setCategory, siteData, toggleFaq } from '../models/staticData.js';
import { renderApp, renderProducts, toggleMobileMenu, updateCategoryTabs, updateFaq, updateProductCount } from '../views/uiView.js';

export function initApp() {
	const state = getState();
	renderApp(siteData, state, getVisibleProducts());

	document.querySelector('#app').addEventListener('click', (event) => {
		const actionTarget = event.target.closest('[data-action]');
		if (!actionTarget) return;

		if (actionTarget.dataset.action === 'category') {
			setCategory(actionTarget.dataset.category);
			updateCategoryTabs(getState().activeCategory);
			renderProducts(getVisibleProducts());
			updateProductCount(getVisibleProducts().length);
			return;
		}

		if (actionTarget.dataset.action === 'faq') {
			const index = Number(actionTarget.dataset.index);
			const previousOpenIndex = getState().openFaq;
			toggleFaq(index);
			const nextOpenIndex = getState().openFaq;
			if (previousOpenIndex !== -1 && previousOpenIndex !== nextOpenIndex) updateFaq(previousOpenIndex, false);
			updateFaq(index, nextOpenIndex === index);
			return;
		}

		if (actionTarget.dataset.action === 'menu') {
			toggleMobileMenu(actionTarget.getAttribute('aria-expanded') !== 'true');
		}
	});

	document.querySelector('.main-nav').addEventListener('click', (event) => {
		if (event.target.closest('a')) toggleMobileMenu(false);
	});
}
