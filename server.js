const express = require('express')
   app = express()
mongoose = require('mongoose')
   bodyParser = require('body-parser')
   articule = require('./api/routes/article')
      
PORT = process.env.PORT || 5000
      
mongoose.connect('mongodb://localhost/newArticle_Project',
   { useNewUrlParser: true },
   // { useUnifiedTopology: true }
)
    let db = mongoose.connection;
    // check for DB error
    db.on("error", function(error){
       console.log(error)
    }) 
    //check for DB error
    db.once("open", function(){
        console.log("Connected to local MONGODataBase" )
     }) 

app.use(bodyParser.json())
app.use('/api/articule', articule)
app.listen(PORT, () => {
    console.log(`server  starting on ${PORT}`)
})
