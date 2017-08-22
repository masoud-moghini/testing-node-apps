const express=require('express');
var app=express();

app.get('/',(req,res)=>{
    res.set('Hello World')
})


app.get('/users',(req,res)=>{
    res.status(200).send({
        description:'verifying that specific user exists',
        users:['masoud moghini','arsalan ghasemi','majid jamshidi']
    })
})

app.listen(3000);
module.exports.app=app;