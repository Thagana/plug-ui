//Target Element for the form

class PlugUI {

	 setContainer(){
		//Form container
		let container = document.createElement('div')
		container.setAttribute('class','container');
		return container;	
	}

	 setHeader(name = 'My Contact Form'){
		//form hearder
		let header = document.createElement('h3');
		header.innerText = name;
		header.setAttribute('class','text-center');
		return header;	
	}

	 createForm(endpoint = '/contact', id = 'plug-ui-form') {
		let form = document.createElement('form');
		//Insert Nessecary class and atrributes
		form.setAttribute('method','POST')
		form.setAttribute('action', endpoint)
		form.setAttribute('id', id);
		return form;	
	}

	//form divider
	 formDivider(){
		//container div
		let div = document.createElement('div')
		div.setAttribute('class','form-group');
		return div;	
	}


	/*  Form Element */
	 createFormElements(name, type = 'text', id){
		//input attrubts and class
		let input = document.createElement('input')
		input.setAttribute('name', name);
		input.setAttribute('type', type);
		input.setAttribute('class','form-control');
		input.setAttribute('id', id);

		return input;	
	}

	 createFormLabel(label){
		//label
		let name = document.createElement('label')
		name.innerText = label;
		return name;	
	}

	 createSendButton(name = 'Send'){
		//Send button
		let sendButton = document.createElement('button')
		sendButton.setAttribute('type','submit')
		sendButton.setAttribute('class','btn btn-primary')
		sendButton.innerText = name;

		return sendButton;
	}

	appedToDOM(parentElement, childElement){
		parentElement.appendChild(childElement);
	}

}

//Add to document
// div.appendChild(Name)
// div.appendChild(input)
// div.appendChild(Email)
// div.appendChild(email)
// div.appendChild(textAreaLabel)
// div.appendChild(TextArea)
// divButton.appendChild(sendButton)
// form.appendChild(div)
// form.appendChild(divButton)
// container.appendChild(header)
// container.appendChild(form)

//final
// myForm.appendChild(container)
// console.log(myForm)