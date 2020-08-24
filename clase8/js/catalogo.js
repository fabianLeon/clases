

const cargarCatalogo = () => {
    const catalogoHtml = catalogo.map(getProducto);

    let productosHtml = catalogoHtml.reduce((acumulado, siguiente) => {
        console.log('estas son categorias', categorias);
        return (acumulado + siguiente);
    });
    document.getElementById('catalogo').innerHTML = productosHtml;
    console.log(miVariable);
}

let miVariable = "Mi variable";

const miarreglo = [1, 2, 3, 4, 5];
let getProducto = (producto) => {
    return `
    <div class="producto">
    <img class="imagen-producto" src="${producto.urlImagen}" alt="${producto.imagen}">
    <h2 class="titulo-producto">${producto.titulo}</h2>
    <p class="descripcion">${producto.descripcion}</p>
    </div>`
}

cargarCatalogo();

const tablaDelDos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((numero, index) => {
    return (`2 X ${numero} = ${2 * numero}`);
});

if (true) {

}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
}