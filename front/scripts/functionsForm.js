const clickSaveBtn = () => {
    const title = document.getElementById("title").value;
    const year = document.getElementById("year").value;
    const director = document.getElementById("director").value;
    const duration = document.getElementById("duration").value;
    const genre = document.getElementById("genre").value.split(" ");
    const rate = document.getElementById("rate").value;
    const poster = document.getElementById("poster").value;
    const description = document.getElementById("description").value;

    if(!title.value || !year.value || !director.value || !duration.value || !genre.value || !rate.value || !poster.value || !description.value){
        alert("Falta completar datos..");
    } else {
        console.log("Funcionando...");
    }
}


const clickClearBtn = () => {
    document.getElementById("form-new-movie").reset();
}



module.exports = { clickSaveBtn , clickClearBtn };