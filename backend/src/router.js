const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const projetController = require('./controllers/projetControllers')

// Routes items
router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.post("/items", itemControllers.add);

// Routes projets
router.get("/projets", projetController.browse);
router.get("/projets/:id", projetController.read);
router.post("/projets", projetController.add);

/* ************************************************************************* */

module.exports = router;
