let button = document.querySelector('#button');
button.addEventListener('click', function (event) {
    event.preventDefault();
    let user = {
        nickname: document.querySelector('#nickname').value,
        name: document.querySelector('#name').value,
        surname: document.querySelector('#surname').value,
        name: document.querySelector('#name').value,
        phone: document.querySelector('#online_phone').value,
        email: document.querySelector('#email').value,
        breed: document.querySelector('#breed').value,
        form__food: document.querySelector('.form__food').value,
        form__gender: document.querySelector('.form__gender').value
    }
    console.log(user)
    fetch('https://httpbin.org/post', {
            method: 'POST',
            body: new FormData(formElem),
            headers: {
                'Content-Type': "application/x-www-form-urlencoded;charset=UTF-8"
            },
        })
        .then(response => response)
        .then(user => {
            console.log(user)
        })
        .catch(error => console.log(error))
})