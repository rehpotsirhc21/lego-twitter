const router = require("express").Router();

const userRoutes = require('./user');
// const postRoutes = require('./post');
const commentRoutes = require('./comment');
const profilePicRoutes = require('./profilepic')

<<<<<<< HEAD
router.use('/profilepics', profilePicRoutes)
// router.use('/users', userRoutes);
=======
router.use('/users', userRoutes);
>>>>>>> 4792cd017ad40cbe50bc06b9cc100fc310cf12b3
// router.use('/posts', postRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
