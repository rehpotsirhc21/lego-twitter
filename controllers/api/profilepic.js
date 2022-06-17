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
router.get('/p/:fig_name', (req, res) =>
{
    ProfilePic.findAll({
        where: {
            fig_name: req.session.user_id
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
router.get('/name/:fig_name', (req, res) =>
{ProfilePic.findAll({
        where: {
        fig_name: req.params.fig_name
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

router.get('/theme/:fig_theme', (req, res) =>
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