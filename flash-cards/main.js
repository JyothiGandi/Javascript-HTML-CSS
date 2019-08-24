const CARDS_URL = './cards.json';

class LocalStorageService {
	static setData(itemName, data) {
		localStorage.setItem(itemName, JSON.stringify(data));
	}

	static getData(itemName) {
		return JSON.parse(localStorage.getItem(itemName));
	}
}

class APIService {
	static getData(url) {
		return fetch(url, {
			method: 'get',
			// mode: 'cors',
			// credentials: 'include'
		})
		.then(resp => {
			if (resp.status >=200 && resp.status <300) {
				return Promise.resolve(resp);
			} else {
				return Promise.reject(new Error(resp.statusText));
			}
		})
		.then(resp => {
			return resp.json();
		})
	}
}

class FlashCardModel {
	constructor() {
		this.cards = [];
		this.currentCardNumber = 0;
		this.flip = false;
	}
}

class FlashCardView {
	constructor() {
		this.cardHTMLElement = document.querySelector('#card-content');
		this.prevBtn = document.querySelector('#prev-btn');
		this.nextBtn = document.querySelector('#next-btn');
		this.flipBtn = document.querySelector('#flip-btn');
	}

	renderQuestion(card) {
		this.cardHTMLElement.textContent = `QUESTION: ${card.question}`;
	}

	renderAnswer(card) {
		this.cardHTMLElement.textContent = `ANSWER: ${card.answer}`
	}
}

class FlashCardController {
	constructor() {
		this.model = new FlashCardModel();
		this.view = new FlashCardView();
	}

	init() {
		const localCards = LocalStorageService.getData('flashcards');
		const p1 = localCards ? Promise.resolve(localCards) : APIService.getData(CARDS_URL);

		p1
		.then(data => {
			if (!localCards) LocalStorageService.setData('flashcards', data);
			if (data && data.cards.length > 0) {
				this.setAllCards(data.cards);
				this.setEventListeners();
				this.displayQuestion();
			}
		})
		.catch(err => {
			console.log('Error occurred while fetching: ', err.message);
		})
	}

	setAllCards(cards) {
		this.model.cards = cards;
	}

	getAllCards() {
		return this.model.cards;
	}

	getCurrentCardNumber() {
		return this.model.currentCardNumber;
	}

	getCurrentCard() {
		return this.model.cards[this.getCurrentCardNumber()];
	}

	incrementCurrentCardNumber() {
		if (this.getCurrentCardNumber() < this.model.cards.length - 1) this.model.currentCardNumber++;
	}

	decrementCurrentCardNumber() {
		if (this.getCurrentCardNumber() > 0) this.model.currentCardNumber--;
	}

	toggleFlip() {
		this.model.flip = !this.model.flip;
	}

	resetFlip() {
		this.model.flip = false;
	}

	displayQuestion() {
		if (this.getCurrentCard()) this.view.renderQuestion(this.getCurrentCard());
	}

	displayAnswer() {
		if (this.getCurrentCard()) this.view.renderAnswer(this.getCurrentCard());
	}

	setEventListeners() {
		this.view.flipBtn.addEventListener('click', (event) => {
			if (this.model.flip) this.displayQuestion();
			else this.displayAnswer();
			this.toggleFlip();
		});

		this.view.flipBtn.addEventListener('keydown', (event) => {
			if (event.key === 'Enter') {
				if (this.model.flip) this.displayQuestion();
				else this.displayAnswer();
				this.toggleFlip();
			}
		});

		this.view.nextBtn.addEventListener('click', (event) => {
			this.resetFlip();
			this.incrementCurrentCardNumber();
			this.displayQuestion();
		});

		this.view.prevBtn.addEventListener('click', (event) => {
			this.resetFlip();
			this.decrementCurrentCardNumber();
			this.displayQuestion();
		});
	}
}

document.addEventListener('DOMContentLoaded', (event) => {
	const flashCard = new FlashCardController();
	flashCard.init();
})