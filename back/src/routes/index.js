const { Router } = require("express");
const movieRouter = require("./movieRouter.js");


const router = Router();

router.use("/movies",movieRouter);


module.exports = router;