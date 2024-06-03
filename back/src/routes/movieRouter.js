const { Router } = require("express");
const movieController = require("../controllers/movieController.js")

const router = Router();

router.get("/", movieController.getAllMovies);

router.post("/", movieController.createMovies);

module.exports = router;