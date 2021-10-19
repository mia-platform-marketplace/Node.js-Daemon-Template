'use strict'

const Ajv = require('ajv')
const pino = require('pino')

const ajv = new Ajv()

const ENVIRONMENT_VARIABLES_SCHEMA = {
  type: 'object',
  required: [
    'LOG_LEVEL',
  ],
  properties: {
    LOG_LEVEL: { type: 'string' },
  },
}

function main(conf) {
  if (!ajv.validate(ENVIRONMENT_VARIABLES_SCHEMA, conf)) {
    pino().error({ errors: ajv.errors }, 'Environment variables are not valid')
    throw new Error('Invalid environment variables')
  }
  const logger = pino({ level: conf.LOG_LEVEL })

  /**
   * Your code here
   */

  logger.info('service dameon has finished its job')
}

if (require.main === module) {
  // eslint-disable-next-line no-process-env
  main(process.env)
}

module.exports = main

