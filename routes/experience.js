const router = require('express').Router()

router.get('/experience', (req, res) => {
    res.render('experience', { title: 'My Experiences' })
})

module.exports = router