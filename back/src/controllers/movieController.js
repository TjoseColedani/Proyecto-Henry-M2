const movieService = require("../services/movieService.js");

module.exports = {
    getAllMovies: async (req, res) => {
        const movies = await movieService.getAllMovies();
        res.status(200).json(movies);
    },
    createMovies: async (req,res) => {
        const {title,year,director,duration,genre,rate,poster,description} = req.body;
        const movies = await movieService.createMovies({title,year,director,duration,genre,rate,poster,description});
        res.status(201).json({message:"OK"});
    }
}

