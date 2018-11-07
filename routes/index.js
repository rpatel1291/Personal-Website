const aboutMeRoutes = require('./aboutme')
const educationRoutes = require('./education')
const skillRoutes = require('./skills')
const experienceRoutes = require('./experience')
const projectRoutes = require('./projects')

const constructorMethod = app => {
    app.get('/', (req, res) => {
        res.render('home', { title: "Home" })
    })
    app.get('/aboutme', aboutMeRoutes)
    app.get('/education', educationRoutes)
    app.get('/skills', skillRoutes)
    app.get('/experience', experienceRoutes)
    app.get('/projects', projectRoutes)

    app.use("*", (req, res) => {
        res.sendStatus(404)
    })
}
module.exports = constructorMethod;