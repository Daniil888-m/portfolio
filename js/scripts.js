/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

	// Activate Bootstrap scrollspy on the main nav element
	const sideNav = document.body.querySelector('#sideNav');
	if (sideNav) {
		new bootstrap.ScrollSpy(document.body, {
			target: '#sideNav',
			offset: 74,
		});
	};

	// Collapse responsive navbar when toggler is visible
	const navbarToggler = document.body.querySelector('.navbar-toggler');
	const responsiveNavItems = [].slice.call(
		document.querySelectorAll('#navbarResponsive .nav-link')
	);
	responsiveNavItems.map(function (responsiveNavItem) {
		responsiveNavItem.addEventListener('click', () => {
			if (window.getComputedStyle(navbarToggler).display !== 'none') {
				navbarToggler.click();
			}
		});
	});

	document.querySelectorAll('[href^="#"').forEach(link => {

		link.addEventListener('click', function (e) {
			e.preventDefault();
			console.log('fff')

			let href = this.getAttribute('href').substring(1);

			const scrollTarget = document.getElementById(href);


			// const topOffset = 0; // если не нужен отступ сверху 
			const elementPosition = scrollTarget.getBoundingClientRect().top + scrollY;
			let minusHeight = document.documentElement.clientWidth <= 991 ? 56 : 0;
			const offsetPosition = elementPosition - minusHeight;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth'
			});
		});
	});

});
