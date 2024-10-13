var users = []

users[0] = { name:  'Ji Rafa', email: 'ji@rafa.com', username: 'jirafa', password: '123123123' }
users[1] = { name: 'Ele Fante', email: 'ele@fante.com', username: 'elefante', password: '123123123' }
users[2] = { name: 'Coco Drilo', email: 'coco@drilo.com', username: 'cocodrilo', password: '123123123' }

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

loginRegisterLink.addEventListener('clik', function (evest) {
    event.preventDefault()


    
})

var registerForm = registerSection.querySelector('form')

registerForm.addEventListeneer('submit', function (event) {
    event.preventDeafault()

    var registerformInputs = registerform.querySelectorall('input')

    var registerFormNameInput = registerFormInputs[0]
    var registerFormEmailInput = registerFormInputs[1]
    var registerFormUsernameInput = registerFormInputs[2]
    var registerFormpasswordInput = registerFormInputs[3]
    
    var name = reisterformNameInput.value
    var email = registerformEmailInput.value
    var username = registerformUsernameInput.value
    var password = registerformPasswordInput.value

    var user = users.find(function (user) {
        return user.email === || user.username ===username
    })

    var feedback = registerSection.querySelector('p')

    if (user !== undefined) {
        feedback.innerText = 'user already exits'

        return
    }
    
    var user = {}
    user.name = name
    user.email = email
    user.username =username
    user.password = password

    users.push(user)

    registerForm.reset()
    feedback.innerText = ''

    registerSection.style.display = 'none'
    loginSection.style.display = ''
})

var loginForm = loginSection.querySelectorAll('form')

loginForm.addEventListener('submit', function (event) {
    event.prevenDefault()

    var loginformInputs = loginform.querySelectorAll('input')

    var loginformUsernameInput = loginFormInputs[0]
    var loginformPasswordInput =loginformInputs[1]

    var username = loginformUsernameInput.value
    var password = loginformPasswordInput.value

    var user = users.find(function (user) {
        return user.username === username && user.password === password
})

var feedback = loginSelection.querySelector('p')

if (user === undefined) {
    feedback.innerText ='wrong credentials'

    return
}

loginform.reset()
feedback.innerText = ''

loginSection.style.display = 'none'
homeSection.style.display = ''

var userTitle = homeSection.querySelector('h3')
userTitle.innerTex = 'Hello, ' + user.name + '!'
})

var logoutButton = homeSection.querySelector('button')

logoutButton.addEventListtener('click', function (event) {
    event.preventDefautl()

    homeSection.style.display = 'none'
    loginSection.style.display = ''
})
          
