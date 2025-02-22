let form = document.querySelector('.login');
let users = [];
function signUp(e) {
    e.preventDefault();
    let username = document.getElementById('username2').value;
    let password = document.getElementById('password2').value;
    let confirmPassword = document.getElementById('passwordconfirm').value;
    if(username.length < 3){
        alert('Cannot find email address');
        return;
    }
    if (password !== confirmPassword) {
        alert('Password does not match');
        return;
    }
    if (localStorage.getItem('users')) {
        users = JSON.parse(localStorage.getItem('users'));
        for (let i =0; i < users.length; i++) {
            if (username === users[i].username) {
                alert('Username already exists');
                return;
            }
        }
    }
    users.push({
        username: username,
        password: password,
    });
    localStorage.setItem('users', JSON.stringify(users));
    alert('User registered successfully');
    window.location.href = 'dangnhap.html';
}
form.addEventListener('submit', signUp);