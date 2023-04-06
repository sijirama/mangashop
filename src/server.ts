import Express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = Express()
const PORT = process.env.PORT || 5173


















app.listen(PORT ,  () => {
  console.log(`Server running on Port:${PORT}`)
});