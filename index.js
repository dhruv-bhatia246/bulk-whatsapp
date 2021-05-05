const accountSid = 'ACa1e1260494d8e344d1a35a42aa0bba26'; 
const authToken = '1758f3dad30645dbb4f10c7252048429'; 
const client = require('twilio')(accountSid, authToken); 
const express = require('express');
const app = express();
var x=1;

const port = process.env.PORT || 3000;

app.set('view engine','ejs');

app.use(express.urlencoded({extended: false}));

app.get('/',(req,res)=>{
    res.render("home.ejs");
})

app.post('/sendMessage',(req,res)=>{
    setInterval(()=>{
        if(x==1){client.messages 
      .create({ 
         body: req.body.message,
         from: 'whatsapp:+14155238886',       
         to: 'whatsapp:+91'+req.body.number 
       }) 
      .then(message => console.log(message.sid))
      .done();}
    },3000)
      res.render("stop.ejs");
})

app.post('/stop',(req,res)=>{
  x=0;
  res.send("Messages Stopped");
})

app.listen(port, ()=> {
    console.log("server is listening");
})
 
