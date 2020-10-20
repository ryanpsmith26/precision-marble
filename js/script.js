const nav = document.querySelector('.nav');
const openButton = document.querySelector('.open-nav');
const closeButton = document.querySelector('.close-nav');

openButton.addEventListener('click', () => {
	nav.classList.add('navigation-open');
});

closeButton.addEventListener('click', () => {
	nav.classList.remove('navigation-open');
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	if (currentScrollPos < 50 || prevScrollpos >= currentScrollPos) {
		document.getElementById('header').style.top = '0';
	} else {
		document.getElementById('header').style.top = '-90px';
	}
	prevScrollpos = currentScrollPos;
};
