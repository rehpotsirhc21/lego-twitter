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
    {
        fig_theme: 'Star Wars',
        fig_name: 'R2-D2',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-012571/101237.jpg'
    },
    {
        fig_theme: 'Star Wars',
        fig_name: 'Chewbacca',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-012154/96949.jpg'
    },
    {
        fig_theme: 'Star Wars',
        fig_name: 'C-3PO',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-012570/101230.jpg'
    },
    {
        fig_theme: 'Star Wars',
        fig_name: 'The Mandalorian',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-010856/79251.jpg'
    },
    {
        fig_theme: 'Star Wars',
        fig_name: 'Aunt Beru',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-012588/103151.jpg'
    },
    {
        fig_theme: 'Star Wars',
        fig_name: 'Storm Trooper',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-002089/58899.jpg'
    },
    {
        fig_theme: 'Star Wars',
        fig_name: 'Rey',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-004440/59079.jpg'
    },
    {
        fig_theme: 'Star Wars',
        fig_name: 'Princess Leia',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-004422/59124.jpg'
    },
    {
        fig_theme: 'Star Wars',
        fig_name: 'Yoda',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-004305/58972.jpg'
    },
    {
        fig_theme: 'Star Wars',
        fig_name: 'Luke Skywalker',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-004349/58995.jpg'
    },
    {
        fig_theme: 'Star Wars',
        fig_name: 'Hon Solo',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-004322/60833.jpg'
    },
    {
        fig_theme: 'Star Wars',
        fig_name: 'Darth Revan',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-001162/73793.jpg'
    },
    // marvel themed mini fig
    {
        fig_theme: 'Marvel',
        fig_name: 'Ant-Mat',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-005094/59351.jpg'
    },
    {
        fig_theme: 'Marvel',
        fig_name: 'Black Widow',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-008300/63042.jpg'
    },
    {
        fig_theme: 'Marvel',
        fig_name: 'Captain America',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-005226/59388.jpg'
    },
    {
        fig_theme: 'Marvel',
        fig_name: 'Doctor Strange',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-005331/59465.jpg'
    },
    {
        fig_theme: 'Marvel',
        fig_name: 'Hulk',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-002208/65927.jpg'
    },
    {
        fig_theme: 'Marvel',
        fig_name: 'Iron Man',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-005348/59485.jpg'
    },
    {
        fig_theme: 'Marvel',
        fig_name: 'Spider-Ham',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-008921/65098.jpg'
    },
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
    {
        fig_theme: 'DC',
        fig_name: 'Green Lantern',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-005047/59345.jpg'
    },
    {
        fig_theme: 'DC',
        fig_name: 'Aquaman',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-005413/59732.jpg'
    },
    {
        fig_theme: 'DC',
        fig_name: 'Batgirl',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-004627/59730.jpg'
    },
    {
        fig_theme: 'DC',
        fig_name: 'Harley Quinn',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-009579/66215.jpg'
    },
    {
        fig_theme: 'DC',
        fig_name: 'Wonder Woman',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-006048/73377.jpg'
    },
    {
        fig_theme: 'DC',
        fig_name: 'Joker',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-005021/59341.jpg'
    },
    {
        fig_theme: 'DC',
        fig_name: 'Superman',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-005256/59417.jpg'
    },
    {
        fig_theme: 'DC',
        fig_name: 'Robin',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-005298/59442.jpg'
    },
    {
        fig_theme: 'DC',
        fig_name: 'Shazam',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-002044/67563.jpg'
    },
    // harry potter themed min fig
    {
        fig_theme: 'Harry Potter',
        fig_name: 'Albus Dumbledore',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-011366/88617.jpg'
    },
    {
        fig_theme: 'Harry Potter',
        fig_name: 'Bellatrix',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-008941/65225.jpg'
    },
    {
        fig_theme: 'Harry Potter',
        fig_name: 'Dementor',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-006122/60582.jpg'
    },
    {
        fig_theme: 'Harry Potter',
        fig_name: 'Dobby',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-008926/65231.jpg'
    },
    {
        fig_theme: 'Harry Potter',
        fig_name: 'Draco Malfoy',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-006186/60809.jpg'
    },
    {
        fig_theme: 'Harry Potter',
        fig_name: 'Harry Potter',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-010508/71849.jpg'
    },
    {
        fig_theme: 'Harry Potter',
        fig_name: 'Hermione Granger',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-011352/88606.jpg'
    },
    {
        fig_theme: 'Harry Potter',
        fig_name: 'Severus Snape',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-006126/60586.jpg'
    },
    {
        fig_theme: 'Harry Potter',
        fig_name: 'Ron Weasley',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-010885/79350.jpg'
    },
    {
        fig_theme: 'Harry Potter',
        fig_name: 'Hagrid',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-006189/60341.jpg'
    },
    {
        fig_theme: 'Harry Potter',
        fig_name: 'Voldemort',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-006124/60585.jpg'
    },
    {
        fig_theme: 'Harry Potter',
        fig_name: 'Nearly Headless Nick',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-011367/88618.jpg'
    },
    {
        fig_theme: 'Harry Potter',
        fig_name: 'Neville Longbottom',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-011356/88609.jpg'
    },
    // Disney themed mini fig
    {
        fig_theme: 'Disney',
        fig_name: 'Donald Duck',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-000569/59854.jpg'
    },
    {
        fig_theme: 'Disney',
        fig_name: 'Goofy',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-005751/59852.jpg'
    },
    {
        fig_theme: 'Disney',
        fig_name: 'Minnie Mouse',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-005748/59849.jpg'
    },
    {
        fig_theme: 'Disney',
        fig_name: 'Daisy Duck',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-005755/59860.jpg'
    },
    {
        fig_theme: 'Disney',
        fig_name: 'Mickey Mouse',
        fig_url: 'https://cdn.rebrickable.com/media/sets/fig-005753/59856.jpg'
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


//  {
//         fig_theme: '',
//         fig_name: '',
//         fig_url: ''
//     },