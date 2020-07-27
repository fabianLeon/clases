
console.log(mivariable);

const cargarCatalogo = () => {

    const catalogoHtml = catalogo.map((producto) => {
        return `
<div class="producto">
    <img class="imagen-producto" src="${producto.urlImagen}" alt="${producto.imagen}">
    <h2 class="titulo-producto">${producto.titulo}</h2>
    <p class="descripcion">${producto.descripcion}</p>
</div>`
    });

    console.log(catalogo);
    console.log(catalogoHtml);
    let productosHtml = catalogoHtml.reduce((acumulado, siguiente) => {
        console.log(acumulado);
        return (acumulado + siguiente);
    });
    console.log(productosHtml);
    document.getElementById('catalogo').innerHTML = productosHtml;
}

cargarCatalogo();

const tablaDelDos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    .map((numero, index) => {
        return (`2 X ${numero} = ${2 * numero}`)
    })

console.log(tablaDelDos);
