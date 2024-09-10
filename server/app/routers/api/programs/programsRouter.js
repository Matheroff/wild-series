const express = require("express");

const programsRouter = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import item-related actions
const { browse, read } = require("../../../controllers/programActions");

// Route to get a list of programs
programsRouter.get("/", browse);

programsRouter.get("/:id", read); // Complete path is: /api/programs/:id

/* ************************************************************************* */

module.exports = programsRouter;