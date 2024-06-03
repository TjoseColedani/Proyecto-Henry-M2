const Movie = require("../models/Movie.js");




module.exports = {
    getAllMovies: async () => {
        const movieFind = await Movie.find();
        return movieFind;
    },

    createMovies: async (data) => {
        const createMovie = await Movie.create(data);
        return createMovie;
    }
}