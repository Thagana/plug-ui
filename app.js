document.addEventListener('DOMContentLoaded', function() {
	let Form  = document.getElementById('myForm');
	const myForm = new PlugUI();
	const container = myForm.setContainer();
	const header = myForm.setHeader('My New Form');
	const form = myForm.createForm();
	const formDivider = myForm.formDivider();
	/* Labels */
	const nameLabel = myForm.createFormLabel('Name');
	const emailLabel = myForm.createFormLabel('Email');

	/* Form Input elements */
	const nameElement = myForm.createFormElements(name = 'email', type = 'text', id = 'name');
	const emailElement = myForm.createFormElements(name = 'email', type = 'email', id = 'email');
	const textAreaElement =  myForm.createFormElements(name = 'messsage', type = 'textarea', id = 'message');

	const sendButton = myForm.createSendButton('Send');

	myForm.appedToDOM(container, header);
	myForm.appedToDOM(container, form);

	myForm.appedToDOM(form, formDivider);
	myForm.appedToDOM(formDivider, nameLabel);
	myForm.appedToDOM(formDivider, nameElement);

	myForm.appedToDOM(form, formDivider);
	myForm.appedToDOM(formDivider, emailLabel);
	myForm.appedToDOM(formDivider, emailElement);

	myForm.appedToDOM(form, formDivider);
	myForm.appedToDOM(formDivider, sendButton);
	myForm.appedToDOM(formDivider, sendButton);
	
	myForm.appedToDOM(Form, container);
	console.log(Form);
})