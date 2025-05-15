const fs = require('fs')
const path = require('path')
const Ajv = require('ajv')

const schemaPath = path.join(__dirname, 'users-schema.json')
const dataPath = path.join(__dirname, '../../users.json')

const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf-8'))
const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'))

const ajv = new Ajv({ allErrors: true })
const validate = ajv.compile(schema)

if (!validate(data)) {
  console.error('❌ users.json failed validation:\n')
  validate.errors.forEach((err) => {
    console.error(`- [${err.instancePath}] ${err.message}`)
  })
  process.exit(1)
} else {
  console.log('✅ users.json passed JSON Schema validation.')
}
