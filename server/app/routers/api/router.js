const express = require("express");

const router = express.Router();

const { sayWelcome } = require("../../controllers/sayActions");

router.get("/", sayWelcome);

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

/* Add these *************************************************************** */
const categoriesRouter = require("./categories/categoryRouter");

router.use("/categories", categoriesRouter);
/* ************************************************************************* */

const programsRouter = require("./programs/programsRouter");

router.use("/programs", programsRouter);

const itemsRouter = require("./items/itemsRouter");

router.use("/items", itemsRouter);

/* ************************************************************************* */

module.exports = router;