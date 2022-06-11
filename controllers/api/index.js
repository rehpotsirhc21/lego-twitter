const router = require('express').Router()
const profilePicRoutes = require('./profilepic.js')

router.use('/profilepic', profilePicRoutes);


module.exports = router;