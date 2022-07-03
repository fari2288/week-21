const button = document.querySelector('#button');
button.addEventListener('click', function (event) {
    event.preventDefault();
    let gif = document.querySelector('#search').value;
    fetch('https://api.giphy.com/v1/gifs/search?api_key=chUi1La2uVjjeRxqiztMr1oH4BUIFDiu&q=' + gif + '&limit=5&offset=0&rating=g&lang=en')
        .then(response => response.json())
        .then(user => {
            console.log(user)
            let parent = document.querySelector('div')
            for (let item of user.data) {
                let img = document.createElement('img')
                img.src = item.images.original.url;
                parent.append(img)
            }
        })
        .catch(error => console.log(error))
})