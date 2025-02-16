// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all projets from the database
    const projets = await tables.projets.readAll();

    // Respond with the projets in JSON format
    res.json(projets);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific projet from the database based on the provided ID
    const projet = await tables.projets.read(req.params.id);

    // If the projet is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the projet in JSON format
    if (projet == null) {
      res.sendStatus(404);
    } else {
      res.json(projet);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the projet data from the request body
  const projet = req.body;

  try {
    // Insert the item into the database
    const insertId = await tables.projets.create(projet);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted projet
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  // edit,
  add,
  // destroy,
};
