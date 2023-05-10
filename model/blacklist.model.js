const mongoose = require('mongoose');

const blackListSchema = mongoose.Schema({
    tokenList:String
});

const blackListModel = mongoose.model('BlacklistTokenList' , blackListSchema);

module.exports = { blackListModel };

