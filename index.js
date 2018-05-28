const express = require('express')
const {mongoose} = require('./sources/db/mongoose')
const app  = express()
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')
const bodyParser = require('body-parser')


app.use(bodyParser.json())

require('./services/passport')
app.use(cookieSession({
    maxAge:1000*60*60*24*30,
    keys:[keys.cookieKey]
}))
app.use(passport.initialize())
app.use(passport.session())

require('./routes/authRoutes')(app)
require('./routes/billingRoutes')(app)

app.use(express.static(__dirname+'/client/build'))

const PORT = process.env.PORT || 5000
app.listen(PORT)
