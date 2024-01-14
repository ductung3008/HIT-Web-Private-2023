const email = document.getElementById('email');
const password = document.getElementById('password');
const form = document.querySelector('form');

function showInfos() {
    const user = {
        email: email.value,
        password: password.value
    };
    console.log(user);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    showInfos();
});

window.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.stopPropagation();
    }
})   