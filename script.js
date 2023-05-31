//scroll sections
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
let containers = document.querySelectorAll('containers');
let forms = document.querySelectorAll('forms');

window.onbeforeunload = () => {
	for (const form of document.getElementsByTagName('form')) {
		form.reset();
	}
};
