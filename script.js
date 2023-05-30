//scroll sections
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
let containers = document.querySelectorAll('containers');
let forms = document.querySelectorAll('forms');

function sendEmail() {
	Email.send({
		Host: 'smtp.gmail.com',
		Username: 'ladyjettt@gmail.com',
		Password: 'Ephesians6:15',
		To: 'ladyjettt@gmail.com',
		From: document.getElementById('email').value,
		Subject: 'New Contact Form Inquiry',
		Body:
			'Name: ' +
			document.getElementById('name').value +
			'<b> Email:' +
			document.getElementById('email').value +
			'<b> Phone no.' +
			document.getElementById('phone').value +
			'<b> Message:' +
			document.getElementById('message').value,
	}).then((message) => alert('Message Sent Successfully'));
}
