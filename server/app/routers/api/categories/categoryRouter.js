const express = require("express");

const categoryRouter = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse, read } = require("../../../controllers/categoryActions");

// Route to get a list of programs
categoryRouter.get("/", browse);

categoryRouter.get("/:id", read); // Complete path is: /api/categories/:id

/* ************************************************************************* */

module.exports = categoryRouter;