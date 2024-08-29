// TODO: Add a comment indicating how this file fits into the MVC framework (is it a Model, a View, or a Controller?) and what it is responsible for handling.
// This file is a controller. It is responsible for handling the routes of the application. It is responsible for handling the data from the model and passing it to the view.

const router = require('express').Router();

// TODO: Add a comment describing the purpose of the get route
// This route is responsible for rendering the all view.
router.get('/', async (req, res) => {
// TODO: Add a comment describing the purpose of the render method
// The render method is responsible for rendering the all view.
  res.render('all');
});

module.exports = router;
