require('dotenv').config()

const mongoose = require('mongoose');

const dbconnetion = mongoose.connect(process.env.MONGOURL)

module.exports = {dbconnetion}


// Warning: connect.session() MemoryStore is not
// designed for a production environment, as it will leak
// memory, and will not scale past a single process.
// Warning: connect.session() MemoryStore is not
// designed for a production environment, as it will leak
// memory, and will not scale past a single process.
// node:internal/modules/cjs/loader:988
// throw err;
// ^
// Error: Cannot find module '../model/FemaleServicemodel'
// Require stack:
// - /app/controllers/FemaleServiceController.js
// - /app/routes/femaleService.route.js
// - /app/index.js
// at Function.Module._resolveFilename (node:internal/modules/cjs/loader:985:15)
// at Function.Module._load (node:internal/modules/cjs/loader:833:27)
// at Module.require (node:internal/modules/cjs/loader:1057:19)
// at require (node:internal/modules/cjs/helpers:103:18)
// at Object.<anonymous> (/app/controllers/FemaleServiceController.js:2:25)
// at Module._compile (node:internal/modules/cjs/loader:1155:14)
// at Object.Module._extensions..js (node:internal/modules/cjs/loader:1209:10)
// at Module.load (node:internal/modules/cjs/loader:1033:32)
// at Function.Module._load (node:internal/modules/cjs/loader:868:12)
// at Module.require (node:internal/modules/cjs/loader:1057:19) {
// code: 'MODULE_NOT_FOUND',
// requireStack: [
// '/app/controllers/FemaleServiceController.js',
// '/app/routes/femaleService.route.js',
// '/app/index.js'
// ]
// }