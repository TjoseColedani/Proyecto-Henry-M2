    // Primera función para mapear y retornar un array de elementos HTML
    // Aca existen en la memoria, aun no en el HTML.

function mapTempDataToHTML(data) {
    return data.map(pelicula => {
        return `
        <div class="tarjeta-pelicula">
            <img src="${pelicula.poster}" alt="${pelicula.title}" class="imagen-pelicula">
            <div class="info-pelicula">
                <h2>${pelicula.title} (${pelicula.year})</h2>
                <p><strong>Director:</strong> ${pelicula.director}</p>
                <p><strong>Duración:</strong> ${pelicula.duration}</p>
                <p><strong>Género:</strong> ${pelicula.genre.join(", ")}</p>
                <p><strong>Rate:</strong> ${pelicula.rate}</p>
            </div>
        </div>
        `;
    });
}


    // Segunda función para agregar los elementos HTML al contenedor.
    // La funcion tomara los textos de html que seran incrustados despues.
    // ContainerId es el contenedor creado en HTML donde pondremos las tarjetas.


function addHTMLToContainer(htmlArray, containerId) {
    const contenedorPeliculas = document.getElementById(containerId);
    
    
    // Aca iteramos en los elementos HTML en formato texto para sacar sus valores.
    // Creamos el div y dentro ponemos todo lo que va a llevar.
    // El contenedor de peliculas que es el contenedor del HTML termina teniendo los divs y hereda toda caracteristica que tengan.
    
    htmlArray.forEach(htmlElement => {
        const tarjetaPelicula = document.createElement("div");
        tarjetaPelicula.innerHTML = htmlElement;
        contenedorPeliculas.appendChild(tarjetaPelicula);
    });
}


module.exports = { mapTempDataToHTML, addHTMLToContainer }