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
        name: nombre === 'Luzda'?'chiqui':nombre,
        email: emailListUsers[index],
        id: index 
    };
});

const buscar = () =>{
    const inputFilter = document.getElementById('inputFilter');
    const result  = amigosFormales.filter(( element )=> {
        const valores = [`${element.id}`, element.name, element.email];
        return (valores.filter((textElement)=>{
            return (textElement.includes(inputFilter.value) > 0)
        })).length > 0
    })
}

const reduceElements = amigos.reduce((acumulado, siguiente)=>{
    console.log(`${acumulado}, ${siguiente}`);
    return `${acumulado}, ${siguiente}`;
})

