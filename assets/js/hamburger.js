// function hamburger(){
// window.addEventListener('DOMContentLoaded', () => {
//     const cross = document.querySelector('.cross_header');
// 	const mirrow = document.querySelector('.header-bg');
// 	const menuMobil = document.querySelector('.diz-mobil');
// 	const contactWrap = document.querySelector('.contact-wrap');
// 	const wrapCross = document.querySelector('.wrap-cross')
	
// 	if (cross) {
// 		const nav = document.querySelector('nav.navigation');
// 		cross.addEventListener('click', function(e) {
// 			cross.classList.toggle('cross--active');
// 			mirrow.classList.toggle('mirrow-height');
// 			menuMobil.classList.toggle('mobil-nav');
// 			contactWrap.classList.toggle('phone-wrap-mobil');
// 			wrapCross.classList.toggle('wrap-cross-black');
// 		});
// 	}
// });
// }
// export default hamburger

function hamburger(){
	window.addEventListener('DOMContentLoaded', () => {
		const cross2 = document.querySelector('.cross');
		const cross = document.querySelectorAll('.cross_header');
		const mirrow = document.querySelector('.header-bg');
		const menuMobil = document.querySelector('.diz-mobil');
		const contactWrap = document.querySelector('.contact-wrap');
		const wrapCross = document.querySelector('.wrap-cross')
		const header = document.querySelector('.header')
		console.log(cross)
		cross.forEach(cro => {
		if (cro) {
			const nav = document.querySelector('nav.navigation');
			cro.addEventListener('click', function(e) {
				cross2.classList.toggle('cross--active');
				mirrow.classList.toggle('mirrow-height');
				menuMobil.classList.toggle('mobil-nav');
				contactWrap.classList.toggle('phone-wrap-mobil');
				wrapCross.classList.toggle('wrap-cross-black');
				header.classList.toggle('header_active')
			});
		}
		})
	})
	}
	export default hamburger