let button = document.querySelector('#login');
button.addEventListener('click', function (e) {
    e.preventDefault();
    let user = {
        name: document.querySelector('#name').value,
        surname: document.querySelector('#surname').value,
        email: document.querySelector('#email').value,
        password: document.querySelector('#password').value,
        confirmpassword: document.querySelector('#confirmpassword').value
    }
    console.log(user);
    fetch('https://httpbin.org/post', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        })
        .then(response => response.json())
        .then(user => {
            console.log(user);
        })
        .catch(error => console.log(error));
})