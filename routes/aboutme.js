const router = require("express").Router()

router.get('/aboutme', (req, res) => {
    res.render('aboutme', { title: "About Me" })
})

module.exports = router;