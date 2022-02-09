let id = 0;

const movies = [
  {
    id: id,
    title: "test movie",
  },
];

// @desc    Get movies
// @route   GET /api/movies
// @access  Private
const getMovies = async (req, res) => {
  res.status(200).json(movies);
};

// @desc    Set movie
// @route   POST /api/movies
// @access  Private
const setMovies = async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const movie = req.body;
  movie.id = ++id;
  movies.push(movie);

  res.status(200).json({ message: "Created" });
};

// @desc    Update movie
// @route   PUT /api/movies/:id
// @access  Private
const updateMovie = async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  movies[req.params.id] = req.body;
  res.status(200).json({ message: `Updated movie title` });
};

// @desc    Delete movie
// @route   DELETE /api/movies/:id
// @access  Private
const deleteMovie = async (req, res) => {
  delete movies[req.params.id];
  res.status(200).json({ message: `Deleted movie` });
};

module.exports = {
  getMovies,
  setMovies,
  updateMovie,
  deleteMovie,
};
