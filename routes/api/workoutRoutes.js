const router = require("express").Router();

// Get the last workout here
router.get("/", (req, res) => {

});

// Get workouts by range 
// Double check if this breaks with the exercise put route...
router.get("/range", (req, res) => {

});

// Add a new workout here
router.post("/", (req, res) => {
    
});

// Add an exercise to a workout (by ID) here???
router.put("/:id", (req, res) => {

});

module.exports = router;