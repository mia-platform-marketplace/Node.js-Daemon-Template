/* eslint id-length: 0 */
/* eslint no-shadow: 0 */
'use strict'

const t = require('tap')

const conf = require('./conf')
const index = require('../index')

t.test('environment is checked correctly', t => {
  index(conf)
  t.end()
})

t.test('invalid config', t => {
  t.throws(() => index({}), 'Invalid environment variables')
  t.end()
})
