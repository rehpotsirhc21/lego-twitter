const { ProfilePic } = require('../models/')

const profiledata = [
    {
        // star wars themed mini fig
        fig_theme: 'Star Wars',
        fig_name: 'Darth Vader',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-004504/59136.jpg'
    },
    {
        fig_theme: 'Star Wars',
        fig_name: 'Sith Trooper',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-004454/59100.jpg'
    },
    {
        fig_theme: 'Star Wars',
        fig_name: 'Darth Maul',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-011632/93849.jpg'
    },
    {
        fig_theme: 'Star Wars',
        fig_name: 'Grogu',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-010525/75011.jpg'
    },
    // marvel themed mini fig
    {
        fig_theme: 'Marvel',
        fig_name: 'Black Panther',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-011406/88808.jpg'
    },
    // dc themed mini fig
    {
        fig_theme: 'DC',
        fig_name: 'Batman',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-005420/59543.jpg'
    },
    // harry potter themed min fig
    {
        fig_theme: 'Harry Potter',
        fig_name: 'Albus Dumbledore',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-011366/88617.jpg'
    }
    
]
const seedProfilePic = () => ProfilePic.bulkCreate(profiledata)
module.exports = seedProfilePic

// fig template
// {
//         fig_theme: '',
//         fig_name: '',
//         fig_url: ''
//     }