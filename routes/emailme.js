const router = require("express").Router();

router.get("/emailme", (req, res) => {
    res.render("emailme", { title: "Email Me" });
})

module.exports = router;