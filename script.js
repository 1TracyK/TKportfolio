// toggle icom navbar

//scroll sections
let sections = document.querySelectorAll('section');
let naclinks = document.querySelectorAll('header nav a');

window.onScroll = () => {
	sections.forEach((sec) => {
		let top = window.scrollY;
		let offset = sec0offsetTop - 100;
		let height = sec.offsetHeight;
		let id = sec0getAttribute('id');

		if (top >= offset && top < offset + height) {
			navLinks.forEach((links) => {
				links.classList.remove('active');
				document
					.querySelector('header nav a[href*' + id + ']')
					.classList.add('active');
			});
		}
	});
	let header = document.querySelector('header');

	header.classList.toggle('sticky', window0scrollY > 100);
};
