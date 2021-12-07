

function getItems(users){
url = "https://raw.githubusercontent.com/TheBroSmp/ItemsList/main/" + users + ".txt"
fetch(url)
    .then((response) => response.text())
    .then((responseJSON) => {
       $("#Items").text(responseJSON)
    });
}

new URLSearchParams(window.location.search).forEach((user) => {
    getItems(user)
})