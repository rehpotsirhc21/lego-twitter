const { Comment } = require('../models')
const commentdata = [
    {
        comment_text: 'That is the almost as cool as you Blake!',
        user_id: 2,
        post_id: 1
    }
]

const seedComments = () => Comment.bulkCreate(commentdata)

module.exports = seedComments