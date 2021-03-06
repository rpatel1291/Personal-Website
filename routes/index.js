const aboutMeRoutes = require('./aboutme')
const educationRoutes = require('./education')
const skillRoutes = require('./skills')
const experienceRoutes = require('./experience')
const projectRoutes = require('./projects')
const emailMeRoutes = require('./emailme')

const constructorMethod = app => {
    app.get('/', (req, res) => {
        res.render('aboutme', { title: "" })
    })
    app.get('/aboutme', aboutMeRoutes)
    app.get('/education', educationRoutes)
    app.get('/skills', skillRoutes)
    app.get('/experience', experienceRoutes)
    app.get('/projects', projectRoutes)
    app.get('/emailme', emailMeRoutes)

    app.use("*", (req, res) => {
        res.sendStatus(404)
    })
}
module.exports = constructorMethod;