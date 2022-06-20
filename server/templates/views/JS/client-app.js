const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.getElementById("msg-1");
const messageTwo = document.getElementById("msg-2");

messageOne.textContent = ''
messageTwo.textContent = ''

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const address = search.value

    fetch('http://34.204.205.165:4000/weather/?address=' + address).then((response) => {
        if (!address) {
            alert("pleace insert your location")
        }
        response.json().then((data) => {
            if (data.error) {
                alert(data.error)
            } else {
                messageOne.textContent = data.location;
                messageTwo.textContent = data.summery;
            }
        })
    })
})