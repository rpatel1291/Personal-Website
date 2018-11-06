const router = require("express").Router()

router.get('/education', (req, res) => {
    res.render('education', { title: "Education" })
})

module.exports = router;