const router = require('express').Router()

router.get('/projects', (req, res) => {
    res.render('projects', { title: 'My Projects' })
})

module.exports = router