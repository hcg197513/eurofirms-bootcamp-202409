var sections = document.querySelectorAll('section')

var welcomeSection = sections[0]
var registerSection = section[1]
var loginSection = sections[2]
var homeSection = sections[3]

registerSection.style.display ='none'
loginSection.style.display = 'none'
homeSection.style.display = 'none'

var welcomeLinks = welcomeSection.querySelectorAll('a')

var welcomRegisterLinks = welcomeLinks[0]
var welcomeLoginLink = welcomeLinks[1]

welcomeRegisterLink.addEventListener('clik', function (event) {
    event.preventDeafault()

    welcomeSection.style.display = 'none'
    registerSection.style.display = ''
})

welcomeLoginLink.addEventListener('clik', function (event) {
    event.preventDefault()

    welcomeSection.style.display = 'none'
    loginSection.style.display = ''
})

var registerLinks = registerSection.queryselectorAll('a')

var registerLoginLink = registerLinks[0]

registerLoginLink.addEventListener('clic', function (event) {
    event.preventDeafault()

    registerSection.style.display = 'none'
    loginSection.style.display = ''
})

var loginLinks = loginSection.querySelectorAll('a')

var loginRegisterLink = logingLink[0]

loginRegisterLink.addEventListener('clik', function (event) {
    event.preventDefault()

    loginSection.style.display = 'none'
    registerSection.style.display = ''
})

var registerForm = registerSection.querySelector('form')

registerForm.addEventListeneer('submit', function (event) {
    event.preventDeafault()

    var registerFormInputs = registerform.querySelectorall('input')

    var registerFormNameInput = registerFormInputs[0]
    var registerFormEmailInput = registerFormInputs[1]
    var registerFormUsernameInput = registerFormInputs[2]
    var registerFormpasswordInput = registerFormInputs[3]
    
    var name = reisterFormNameInput.value
    var email = registerFormEmailInput.value
    var username = registerFormUsernameInput.value
    var password = registerFormPasswordInput.value

    var feedback = registerSection.querySelector('p')
    
    try {
        registerFormUsernameInput(name, email. username, password)

        registerForm.reset()
        feedback.innerText = ''

        registerSection.style.dsplay = 'none'
        loginSection.style.display = ''
    } catch (error) {
        feedback.innerText = error.message

        console.error(error)
    }
})

var loginForm = loginSection.querySelectorAll('form')

loginForm.addEventListener('submit', function (event) {
    event.prevenDefault()

    var loginFormInputs = loginForm.querySelectorAll('input')

    var loginFormUsernameInput = loginFormInputs[0]
    var loginFormPasswordInput = loginFormInputs[1]

    var username = loginFormUsernameInput.value
    var password = loginFormPasswordInput.value

var feedback = loginSelection.querySelector('p')
 
try {
    var user = autenticateUser(username, password)

    loginForm.reset()
    feedback.innerText = ''

    loginSection.style.display = 'none'
    homeSection.style.display = ''

    var userTitle = homeSection.querySelector('h3')
    userTitle.innerTex = 'Hello, ' + user.name + '!'
} catch (error) {
    feedback.innerText = error.message

    console.error(error)
   }
})

var logoutButton = homeSection.querySelector('button')

logoutButton.addEventListener('click', function (event) {
    event.preventDefautl()

    homeSection.style.display = 'none'
    loginSection.style.display = ''
})