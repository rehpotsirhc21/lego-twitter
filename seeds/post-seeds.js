const { Post } = require('../models')
const postdata = [
    {
        title: 'New Lego Loop Coaster',
        post_body: 'https://www.thebrickfan.com/lego-fairground-collection-loop-coaster-10303-officially-announced/',
        user_id: '1'
    }

]

const seedPosts = () => Post.bulkCreate(postdata)

module.exports = seedPosts