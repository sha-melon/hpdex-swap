
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./hpbswap-sdk.cjs.production.min.js')
} else {
  module.exports = require('./hpbswap-sdk.cjs.development.js')
}
