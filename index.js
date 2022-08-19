const express = require('express')
const app = express()

app.get('/',function(req,res){
    res.send("shekhar")
})

app.post('/hello',function(req,res){
    res.status(300).json({'Name':"shekhar shinde",
                           "Friends":"Dipak,Pooja,Suraj"               
                         })
})


app.listen(3000)