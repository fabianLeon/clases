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
