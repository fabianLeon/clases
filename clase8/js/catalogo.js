const categorias = [
    {
    }
]
const catalogo = [
    {
        categoria: 'Nevera-Frutas',
        urlImagen: 'img/millonarios.jpg',
        imagen: 'Porrista de millonarios',
        titulo: 'Porrista de millonarios',
        descripcion: 'Esta es una linda fruta en forma de banano para decorar tu nevera',
        precio: '3000'
    },
    {
        categoria: 'Nevera-Frutas',
        urlImagen: 'img/millonarios.jpg',
        imagen: 'Porrista de millonarios',
        titulo: 'Porrista de santafe',
        descripcion: 'Esta es una linda fruta en forma de banano para decorar tu nevera',
        precio: '3000'
    },
    {
        categoria: 'Nevera-apliques',
        urlImagen: 'img/millonarios.jpg',
        imagen: 'Porrista de millonarios',
        titulo: 'Porrista de nacional',
        descripcion: 'Esta es una linda fruta en forma de banano para decorar tu nevera',
        precio: '3000'
    },
];

const cargarCatalogo = (categoria) => {
    
    const catalogoXCategorias = catalogo.filter((producto) => {
        return producto.categoria === categoria;
    });

    const catalogoHtml = catalogoXCategorias.map((producto) => {
        return `<div class="producto">
                    <h2 class="titulo-producto">${producto.titulo}</h2>
                    <img src="${producto.urlImagen}" alt="${producto.imagen}">
                    <p class="descripcion">${producto.descripcion}</p>
                </div>
                <hr>`
    });
    let productosHtml = catalogoHtml.reduce((acumulado, siguiente) => {
        return (acumulado + siguiente);
    });
    console.log(productosHtml);
    document.getElementById('catalogo').innerHTML = productosHtml;
}

cargarCatalogo('Nevera-Frutas');
