const burgerMenu = document.querySelector(`.burger_menu`);
const mobileMenu = document.querySelector(`.mobile_menu`);
const mobileNav = document.querySelector(`.mobile__nav`);
const body = document.querySelector(`body`);
console.log(`привет`);
burgerMenu.addEventListener(`click`, function (event) {
	mobileMenu.classList.toggle(`show-mobile-menu`);
	mobileNav.classList.toggle(`show-mobile-nav`);
	burgerMenu.classList.toggle(`show-white-menu`);
	body.classList.toggle(`lock`);
})

const images = document.querySelectorAll(`img`);

const options = {
	root: null,
	rootMargin: '150px',
	threshold: 0.1
}

function handleImg(images, observer) {
	images.forEach(img => {
		console.log(img.intersectionRatio);
		if (img.intersectionRatio > 0) {
			loadImg(img.target);
		}
	})
}

function loadImg(images) {
	images.src = images.getAttribute('data');
}

const observer = new IntersectionObserver(handleImg, options);

images.forEach(img => {
	observer.observe(img);
})