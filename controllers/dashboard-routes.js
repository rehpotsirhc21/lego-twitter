const router = require('express').Router()
const sequelize = require('../config/connection')
const { Post, User, Comment } = require('../models')
const withAuth = require('../utils/auth')

router.get('/', withAuth, (req, res) =>
{
  Post.findAll({
    where: {
      // use the ID from the session
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'title',
      'created_at'
    ]
    })
        .then(dbPostData =>
        {
            const posts = dbPostData.map(post => post.get({plain: true}))
            res.render('dashboard', {posts, loggedIn: true})
        })
        .catch(err =>
        {
            
            console.log(err)
            res.status(500).json(err)
        })
  // User.findOne({
  //   where: {
  //     user_id: req.session.user_id
  // },
  //   attributes: [
  //     'profilepic'
  //   ]
  // })
})
router.get('/profilepic', (req, res) =>
{
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("profliepic");
});



module.exports = router