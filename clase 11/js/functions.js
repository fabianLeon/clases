let newImage = () => {

    fetch('https://yesno.wtf/api')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(myJson);
            // Import stylesheets
            const appDiv = document.getElementById('app');
            appDiv.innerHTML = `
            <h1 class="title"> ${myJson.answer} </h1>
            <img class="image" src="${myJson.image}">
            `;
        });
}