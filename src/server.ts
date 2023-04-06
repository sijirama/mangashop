import Express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = Express()
const PORT = process.env.PORT || 5173




app.get('/', (req, res) =>{
    res.status(200).send("Thank you for asking for the manga")
    console.log(req.url , req.method)
})













app.listen(PORT ,  () => {
  console.log(`Server running on Port:${PORT}`)
});