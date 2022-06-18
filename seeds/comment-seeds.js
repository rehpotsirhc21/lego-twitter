const { Comment } = require('../models')
const commentdata = [
    {
        comment_text: 'That is one of the coolest things i hav ever seen!!',
        user_id: 2,
        post_id: 1
    }
]

const seedComments = () => Comment.bulkCreate(commentdata)

module.exports = seedComments