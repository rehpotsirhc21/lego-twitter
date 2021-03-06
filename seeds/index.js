const seedUsers = require('./user-seeds')
const seedPosts = require('./post-seeds')
const seedComments = require('./comment-seeds')

const sequelize = require('../config/connection'); 
const seedProfilePic = require('./profile-pic-seeds');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedUsers();
    console.log('--------------');

    await seedPosts();
    console.log('--------------');

    await seedComments();
    console.log('--------------');

    await seedProfilePic()
    console.log('--------------')

    // await seedLikes();
    // console.log('--------------');

    process.exit(0);
};

seedAll();