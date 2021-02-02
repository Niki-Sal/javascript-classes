const express = require("express")
const app = express()

//add home route
app.get("/", (req, res)=>{
    res.send("Today topic will be clases")
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () =>{
    console.log(`server is running on PORT: ${PORT} 🆗`)
})