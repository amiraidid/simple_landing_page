const nav = document.getElementById('nav');
const menuBar = document.getElementById('icon-hamburger');
const menuClose = document.getElementById('icon-close');

menuBar.addEventListener('click', () => {
    if (!nav.classList.contains('active')) {
        nav.classList.toggle('active');
        menuClose.classList.add('active')
        menuBar.style.display = 'none';
    }
    menuClose.addEventListener('click', () => {
        menuClose.classList.remove('active')
        menuBar.style.display = 'block';
        nav.classList.remove('active');
    })
});

    
const goBtn = document.getElementById('go-btn');
let emailBox = document.getElementById('email-box').value;
const errorMessage = document.getElementById('error-message')

goBtn.addEventListener('click', () => {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailBox)) {
        errorMessage.classList.remove('hidden');
    }

})




