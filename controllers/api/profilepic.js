const router = require('express').Router()
const { ProfilePic, User } = require('../../models')


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
router.get('/:fig_theme', (req, res) =>
{
    ProfilePic.findAll({
        where: {
            fig_theme: req.params.fig_theme
        }
    })
        .then(dbProfilePicData =>
        {
            if (!dbProfilePicData)
            {
                res.status(400).json({ message: 'No Mini-Figs in that theme' })
                return
            }
            res.json(dbProfilePicData)
        })
        .catch(err =>
        {
            console.log(err)
            res.status(500).json(err)
    })

})

module.exports = router