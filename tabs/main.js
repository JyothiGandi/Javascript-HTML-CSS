class Tab {
	constructor() {
		this.tabs = document.querySelector('.tabs');
		this.tabContent = document.querySelector('.tab-content');
		this.setTabClickEventListener();
	}

	handleTabClickEvent = (event) => {
		console.log('click event', event.key, event.target);
		console.log(event.target.dataset.tab);
		if (event.dataset.dataset.tab) {
			this.renderTabContent(event.target.dataset.tab)
		}
	}

	handleTabKeyDownEvent = (event) => {
		console.log('key down event', event.key, event.target.getAttribute('data-tab'));
		console.log(event.key === 'Enter' && event.target.tab);
		if (event.dataset.dataset.tab) {
			this.renderTabContent(event.target.dataset.tab)
		}
	}

	renderTabContent(tabNumber) {
		console.log(tabNumber);
		this.tabContent.innerHTML = `<p>Tab number ${tabNumber}`;
	}

	setTabClickEventListener() {
		this.tabs.addEventListener('click', this.handleTabClickEvent);
		this.tabs.addEventListener('keydown', this.handleTabKeyDownEvent);
	}
}

window.addEventListener('DOMContentLoaded', (event) => {
	console.log('DOM fully loaded and parsed');
	new Tab();
});
