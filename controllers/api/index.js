const router = require("express").Router();

const userRoutes = require('./user');
const postRoutes = require('./post');
const commentRoutes = require('./comment');
const profilePicRoutes = require('./profilepic')

router.use('/profilepics', profilePicRoutes)
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);


module.exports = router;
