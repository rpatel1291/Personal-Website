const router = require("express").Router()

router.get('/skills', (req, res) => {
    res.render('skills', { title: "My Skills" })
})

module.exports = router;