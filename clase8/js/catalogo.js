const cargarCatalogo = () => {

    const catalogoHtml = catalogo.map((producto) => {
        return `
<div class="producto">
    <img src="${producto.urlImagen}" alt="${producto.imagen}">
    <h2 class="titulo-producto">${producto.titulo}</h2>
    <p class="descripcion">${producto.descripcion}</p>
</div>
<hr>`
    });
    let productosHtml = catalogoHtml.reduce((acumulado, siguiente) => {
        return (acumulado + siguiente);
    });
    document.getElementById('catalogo').innerHTML = productosHtml;
}

cargarCatalogo();
