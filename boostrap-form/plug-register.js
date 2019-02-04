(function(){
let myForm  = document.getElementById('myForm');

//Form container
let container = document.createElement('div')
container.setAttribute('class','container')

//Header
let header = document.createElement('h3')
header.innerText ='Register Today'
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

//username input
let usernameInput = document.createElement('input')
usernameInput.setAttribute('class','form-control')
usernameInput.setAttribute('name','username')
usernameInput.setAttribute('type','text')

//username input label
let userInputLabel = document.createElement('label')
userInputLabel.innerHTML = 'Username'


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

////Password strength checker
//progress element
let progreeElement = document.createElement('progress')
progreeElement.setAttribute('max','100')
progreeElement.setAttribute('value','0')
progreeElement.setAttribute('id','strength')
progreeElement.setAttribute('class','form-control')
progreeElement.style.width = "100%"
progreeElement.style.display = 'none'


//label Email
let Password = document.createElement('label')
Password.innerText = 'Password'

//Confirm password
let confirmPassword = document.createElement('input')
confirmPassword.setAttribute('class','form-control')
confirmPassword.setAttribute('name','confirm-password')
confirmPassword.setAttribute('type','password')

//label cofirma password
let cPassword = document.createElement('label')
cPassword.innerText = 'Comfirm Password'




//button container
let divButton = document.createElement('div')
divButton.setAttribute('class','form-group')

//Send button
let sendButton = document.createElement('button')
sendButton.setAttribute('type','submit')
sendButton.setAttribute('class','btn btn-primary')
sendButton.innerText = 'Register'

//login route link
let loginLink = document.createElement('a')
loginLink.setAttribute('href','#!')
loginLink.innerText = 'Already Registerd?'


//Add to document
div.appendChild(userInputLabel)
div.appendChild(usernameInput)
div.appendChild(Email)
div.appendChild(input)
div.appendChild(Password)
div.appendChild(password)
div.appendChild(progreeElement)
div.appendChild(cPassword)
div.appendChild(confirmPassword)
divButton.appendChild(sendButton)
form.appendChild(div)
form.appendChild(divButton)
form.appendChild(loginLink)
container.appendChild(Horizontal)
container.appendChild(header)
container.appendChild(Horizontal)
container.appendChild(form)
myForm.appendChild(container)
console.log(myForm)

//functon to check stregnth of password
password.addEventListener('keyup',function(){
    checkPassword(password.value)
})

function checkPassword(val){
    progreeElement.style.display = 'block'
    strength = 0
    if(val.match(/[a-zA-Z0-9][a-zA-Z0-9]+/)){
        strength += 1
    }
    if(val.match(/[~<>?]+/)){
        strength += 1
    }
    if(val.match(/[!@$%^&*()]+/)){
        strength += 1
    }
    if(val.length > 8){
        strength += 1
    }
    switch(strength){
        case 0:
            progreeElement.value = 0;
            break
        case 1:
            progreeElement.value = 20;
            break
        case 2:
            progreeElement.value = 40;
            break
        case 3:
            progreeElement.value = 60;
            break
        case 4:
            progreeElement.value = 100;
            break
        
    }
}


})()