import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.get('*', (req, res) => {
  res.send('Hello From Service B' + `${process.env.INSTANCE_NAME || '1'}`)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
