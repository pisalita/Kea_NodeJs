const express = require("express");
const router = express.Router();
const {
  getMovies,
  setMovies,
  updateMovie,
  deleteMovie,
} = require("../controllers/movieController");

router.route("/").get(getMovies).post(setMovies);
router.route("/:id").delete(deleteMovie).put(updateMovie);

module.exports = router;
