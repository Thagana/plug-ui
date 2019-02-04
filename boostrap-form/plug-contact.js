let myForm  = document.getElementById('myForm');

//Form container
let container = document.createElement('div')
container.setAttribute('class','container')


//form hearder
let header = document.createElement('h3')
header.innerText = 'CONTACT FORM'
header.setAttribute('class','text-center')

let form = document.createElement('form');
//Insert Nessecary class and atrributes
form.setAttribute('method','POST')
form.setAttribute('action','/you-server')
form.setAttribute('id','plugForms')

//container div
let div = document.createElement('div')
div.setAttribute('class','form-group')

//div children
//input attrubts and class
let input = document.createElement('input')
input.setAttribute('name','name')
input.setAttribute('type','text')
input.setAttribute('class','form-control')

//label
let Name = document.createElement('label')
Name.innerText = 'Name'

//div children
//input Email
let email = document.createElement('input')
email.setAttribute('name','email')
email.setAttribute('type','email')
email.setAttribute('class','form-control')

//label Email
let Email = document.createElement('label')
Email.innerText = 'Email'

//TextArea
let TextArea = document.createElement('textarea')
TextArea.setAttribute('class','form-control')
TextArea.setAttribute('name','textarea')
TextArea.setAttribute('id','textareform')

//textarea label
let textAreaLabel = document.createElement('label')
textAreaLabel.innerText = 'Message'


//button container
let divButton = document.createElement('div')
divButton.setAttribute('class','form-group')

//Send button
let sendButton = document.createElement('button')
sendButton.setAttribute('type','submit')
sendButton.setAttribute('class','btn btn-primary')
sendButton.innerText = 'Send'


//Add to document
div.appendChild(Name)
div.appendChild(input)
div.appendChild(Email)
div.appendChild(email)
div.appendChild(textAreaLabel)
div.appendChild(TextArea)
divButton.appendChild(sendButton)
form.appendChild(div)
form.appendChild(divButton)
container.appendChild(header)
container.appendChild(form)

//final
myForm.appendChild(container)
console.log(myForm)