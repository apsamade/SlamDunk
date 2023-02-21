const express = require('express')
const app = express();
const path = require('path')
const adminRoutes = require('./routes/admin')
const errorController = require('./controller/error')

app.use(express.static(path.dirname('public')))
app.set('view engine', 'ejs')

app.use(adminRoutes)
app.use(errorController.getErr)

app.listen(3000)