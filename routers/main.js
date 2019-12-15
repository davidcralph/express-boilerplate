// Import modules
const router = require('express').Router();

// Default route
router.get('/', (req, res) => {
    // Send message to the user
    res.status(200).send('hello');
});

// Export router
module.exports = router;