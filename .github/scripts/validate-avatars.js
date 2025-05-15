const fs = require("fs")
const path = require("path")
const sharp = require("sharp")

const avatarDir = path.resolve(__dirname, "../../avatars")
const avatarFiles = fs.readdirSync(avatarDir).filter(f => /\.(png|jpe?g)$/i.test(f))

let hasError = false
const maxSizeKB = 500
const ratioTolerance = 0.1 // Allow 10% deviation from square

async function checkAvatar (file) {
  const filePath = path.join(avatarDir, file)

  try {
    const stats = fs.statSync(filePath)
    const fileSizeKB = stats.size / 1024
    if (fileSizeKB > maxSizeKB) {
      console.warn(`❌ [Too Large] ${file} - ${fileSizeKB.toFixed(1)} KB (limit: ${maxSizeKB} KB)`)
      hasError = true
    }

    const image = sharp(filePath)
    const { width, height } = await image.metadata()
    const ratio = width / height
    const isSquareLike = ratio > 1 - ratioTolerance && ratio < 1 + ratioTolerance

    if (!isSquareLike) {
      console.warn(`❌ [Not Square] ${file} - ${width}x${height} (ratio: ${ratio.toFixed(2)})`)
      hasError = true
    } else {
      console.log(`✅ ${file} - ${width}x${height}, ${fileSizeKB.toFixed(1)} KB`)
    }
  } catch (err) {
    console.error(`❌ Failed to validate "${file}":`, err.message)
    hasError = true
  }
}

(async () => {
  await Promise.all(avatarFiles.map(checkAvatar))
  if (hasError) {
    console.error("\n❌ Some avatars failed validation. Please fix them before merging.")
    process.exit(1)
  } else {
    console.log("\n✅ All avatars passed validation.")
  }
})()
