let amigos = [
    "Luzda",
    "Rodri",
    "Wolfitang",
    "Alejito",
    "Fabito"
];

const emailListUsers = [
    "Luzda@gmail.com",
    "Rodri@gmail.com",
    "Wolfitang@hotmail.com",
    "Alejito@gmail.com",
    "Fabito@hotmail.com"
];

const amigosFormales = amigos.map((nombre, index) => {
    return {
        name: nombre === 'Luzda' ? 'chiqui' : nombre,
        email: emailListUsers[index],
        id: index
    };
});

const buscar = () => {
    const inputFilter = document.getElementById('inputFilter');
    const result = amigosFormales.filter((element) => {
        const valores = [`${element.id}`, element.name, element.email];
        return (valores.filter((textElement) => {
            return (textElement.includes(inputFilter.value) > 0)
        })).length > 0
    })
}

const reduceElements = amigos.reduce((acumulado, siguiente) => {
    console.log(`${acumulado}, ${siguiente}`);
    return `${acumulado}, ${siguiente}`;
})



const myTimeout = (milliseconds) => {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (milliseconds > 3000) {
                resolve({ time: milliseconds / 2 })
            } else {
                reject({ time: milliseconds * 2 })
            }
        }, milliseconds);
    });
    return myPromise;
}

// myTimeout(2999)
//     .then((returnPromise) => {
//         console.log("my promesa", returnPromise);
//     })
//     .catch((errorPromise) => {
//         console.log("error promesa", errorPromise);
//     })


const getPosts = (path) => {
    return new Promise(function (resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', path);
        req.onload = function () {
            if (req.status == 200) {
                resolve(JSON.parse(req.response));
            }
            else {
                reject(req.onerror);
            }
        };
        req.send();
    })
}
const renderResponse = async () => {
    const storagePrueba = localStorage.getItem('prueba');
    const label = undefined;
    if(!storagePrueba) {
        console.log(storagePrueba);
    }
    const responseData = await getPosts('https://yesno.wtf/api');
    //   localStorage.setItem('prueba', 'dato de prueba')

    const img = `<h1>${responseData.answer}</h1>
    <br><img src="${responseData.image}" alt="${responseData.answer}"/>`;
    const containerImage = document.getElementById('imageContent');
    containerImage.innerHTML = img;
}

const clearStorage = () => {
    localStorage.removeItem('prueba')
}

const reload = () => {
    window.location.reload();
}

renderResponse();