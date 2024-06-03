const userController = async (req,res) => {
    res
    .status(200)
    .send("Estamos recibiendo una solicitud para obtener datos de usuarios")
};

const postController = (req,res) => {
    res
    .status(200)
    .send("Estamos enviando informacion sobre posts")
}

module.exports = {
    userController,
    postController,
};