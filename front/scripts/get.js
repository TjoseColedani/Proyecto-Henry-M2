const axios = require("axios");
const { mapTempDataToHTML, addHTMLToContainer } = require("./functions")


const makeGetRequest = async function(){
    try {
        const {data} = await axios.get("http://localhost:3000/movies");
        //const data = response.data;
        const tarjetasHTML = mapTempDataToHTML(data);
        addHTMLToContainer(tarjetasHTML, "peliculas-container");
    } 
    
    catch (error){
        alert(`${error.mensaje}`)
        console.log(error.message);
    }
}

module.exports = makeGetRequest;
