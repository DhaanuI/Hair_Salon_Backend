require('dotenv').config()

const mongoose = require('mongoose');

const dbconnetion = mongoose.connect(process.env.MONGOURL)

module.exports = {dbconnetion}