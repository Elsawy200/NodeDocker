const express = require('express')
const app = express()
const port = 3000

const data=[
    {
        name:"Mohamed"
    },
    {
        name:"Ahmed"
    },
    {
        name:"Mahmoud"
    },
    {
        name:"Ibrahim"
    },
    {
        name:"Mostafa"
    },
    {
        name:"Hani"
    }
]

app.get('/student', (req, res) => {
  res.json({
    data
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
