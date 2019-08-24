const tmpl = document.createElement('template');
tmpl.innerHTML = `
	<div class='star starhover' data-rating='1' tabindex='1'></div>
	<div class='star starhover' data-rating='2' tabindex='2'></div>
	<div class='star starhover' data-rating='3' tabindex='3'></div>
	<div class='star starhover' data-rating='4' tabindex='4'></div>
	<div class='star starhover' data-rating='5' tabindex='5'></div>
`;

class StarRating {
	constructor(id) {
		this.stars = document.querySelector(`#${id}`);
		this.handleStarClickEvent = (event) => {
			if (!event.target.hasAttribute('data-rating')) return;
			this.setStars(event.target.getAttribute('data-rating'));
		}
		this.handleStarKeyDownEvent = (event) => {
			if (!event.target.hasAttribute('data-rating')) return;
			if (event.key === 'Enter') this.setStars(event.target.getAttribute('data-rating'));
		}
		this.setStarHTMLContent();
		this.starChildren = this.stars.children;
		this.setStarListeners();
	}
	static addClassName(ele, className){
		ele.classList.add(className)
	};
	static removeClassName(ele, className){
		ele.classList.remove(className)
	};

	setStarHTMLContent() {
		this.stars.appendChild(tmpl.content.cloneNode(true));
	}

	setStarListeners() {
		this.stars.addEventListener('click', this.handleStarClickEvent);
		this.stars.addEventListener('keydown', this.handleStarKeyDownEvent);
	}

	removeStarListeners() {
		this.stars.removeEventListener('click', this.handleStarClickEvent);
		this.stars.removeEventListener('keydown', this.handleStarKeyDownEvent);
	}

	setStars(starRating) {
		for (let i = 0; i < this.starChildren.length; i++) {
			if (i < starRating) StarRating.addClassName(this.starChildren[i], 'filledstar');
			// else StarRating.removeClassName(this.starChildren[i], 'filledstar');
			StarRating.removeClassName(this.starChildren[i], 'starhover');
 		}
 		this.removeStarListeners();
	}
}

document.addEventListener('DOMContentLoaded', (event) => {
	new StarRating('feedback');
	new StarRating('rating');
});