const fs = require("fs")
const path = require("path")
const dotenv = require("dotenv")

const root = __dirname

function loadEnvFile(relativePath, { override = false } = {}) {
  const filePath = path.resolve(root, relativePath)
  if (!fs.existsSync(filePath)) {
    return false
  }
  const result = dotenv.config({ path: filePath, override })
  if (result.error) {
    throw result.error
  }
  return true
}

// Base: Netlify CLI (`netlify env:pull`) or local `.env`
loadEnvFile(".env")

// Overrides: `.env.development`, `.env.production`, etc. (optional)
const nodeEnv = process.env.NODE_ENV || "development"
loadEnvFile(`.env.${nodeEnv}`, { override: true })
