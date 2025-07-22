const fs = require('fs')
const path = require('path')
const Ajv = require('ajv')
const addFormats = require('ajv-formats')

const schemaPath = path.join(__dirname, 'users-schema.json')
const dataPath = path.join(__dirname, '../../users.json')

let schema
try {
  schema = JSON.parse(fs.readFileSync(schemaPath, 'utf-8'))
} catch (err) {
  console.error('❌ Failed to parse users-schema.json:')
  console.error(`- ${err.message}`)
  process.exit(1)
}

let data
try {
  const raw = fs.readFileSync(dataPath, 'utf-8')
  data = JSON.parse(raw)
} catch (err) {
  console.error('❌ Failed to parse users.json (invalid JSON syntax):')
  console.error(`- ${err.message}`)
  process.exit(1)
}

const ajv = new Ajv({ allErrors: true, strict: true })
addFormats(ajv)

const validate = ajv.compile(schema)

if (!validate(data)) {
  console.error('❌ users.json failed schema validation:\n')
  validate.errors.forEach((err) => {
    console.error(`- ${err.instancePath} ${err.message} (${err.keyword})`)
  })
  process.exit(1)
} else {
  console.log('✅ users.json passed JSON Schema validation.')
}
