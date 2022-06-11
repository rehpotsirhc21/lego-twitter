const router = require('express').Router()
const { ProfilePic } = require('../../models')


router.get('/', (req, res) => {
    ProfilePic.findAll({
        // attributes: [
        //     'id',
        //     'fig_name',
        //     'fig_url'
        // ]
    })
    .then(dbProfilePicData => res.json(dbProfilePicData))
        .catch(err =>
        {
            console.log(err)
            res.status(500).json(err)
    })
})

module.exports = router