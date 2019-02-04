let myForm  = document.getElementById('myForm');

//Form container
let container = document.createElement('div')
container.setAttribute('class','container')

//Header
let header = document.createElement('h3')
header.innerText ='Login'
header.setAttribute('class','text-center')

//Horizontal line
let Horizontal = document.createElement('hr')


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
input.setAttribute('name','email')
input.setAttribute('type','email')
input.setAttribute('class','form-control')

//label
let Email = document.createElement('label')
Email.innerText = 'Email'

//div children
//input Email
let password = document.createElement('input')
password.setAttribute('name','password')
password.setAttribute('type','password')
password.setAttribute('class','form-control')

//label Email
let Password = document.createElement('label')
Password.innerText = 'Password'


//button container
let divButton = document.createElement('div')
divButton.setAttribute('class','form-group')

//Send button
let sendButton = document.createElement('button')
sendButton.setAttribute('type','submit')
sendButton.setAttribute('class','btn btn-primary')
sendButton.innerText = 'Login'

//register route
let registerRoute = document.createElement('a')
registerRoute.setAttribute('href','#!')
registerRoute.innerHTML = 'Not registerd?'


//Add to document
div.appendChild(Email)
div.appendChild(input)
div.appendChild(Password)
div.appendChild(password)
divButton.appendChild(sendButton)
div.appendChild(registerRoute)
form.appendChild(div)
form.appendChild(divButton)
container.appendChild(Horizontal)
container.appendChild(header)
container.appendChild(Horizontal)
container.appendChild(form)
myForm.appendChild(container)
console.log(myForm)