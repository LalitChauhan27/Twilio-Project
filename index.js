const accountSid = process.env.TWILIO_ACCOUNT_SID; //Enter your Twilio Account SID in place of process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN; //Enter your Twilio Auth Token in place of process.env.TWILIO_ACCOUNT_SID

const express = require('express');
const client = require('twilio')(accountSid, authToken);

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));

app.post("/", (req, res) => {
  console.log(req.body);
    if((req.body.Body=="Send me an image") || (req.body.Body=="send me an image")){
        client.messages.create({
            from: 'whatsapp:+14155238886', //Enter your Twilio WhatsApp Sandbox Number
            to: req.body.From,
            body: "Nutritional Food",
            mediaUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          })
          .then(message => res.send(message))
          .catch(err => {
            console.log(err);
            res.send(err)
          })
    }
    else if((req.body.Body=="Send me a video") || (req.body.Body=="send me a video")){
        client.messages.create({
            from: 'whatsapp:+14155238886', //Enter your Twilio WhatsApp Sandbox Number
            to: req.body.From,
            body: "Bear Video",
            mediaUrl: "https://www.w3schools.com/tags/movie.mp4"
          })
          .then(message => res.send(message))
          .catch(err => {
            console.log(err);
            res.send(err)
          })
    }
    else if((req.body.Body=="Send me a document") || (req.body.Body=="send me a document")){
        client.messages.create({
            from: 'whatsapp:+14155238886', //Enter your Twilio WhatsApp Sandbox Number
            to: req.body.From,
            mediaUrl: 'https://www.africau.edu/images/default/sample.pdf'
          })
          .then(message => res.send(message))
          .catch(err => {
            console.log(err);
            res.send(err)
          })
    }
    else{
        client.messages.create({
            from: 'whatsapp:+14155238886', //Enter your Twilio WhatsApp Sandbox Number
            to: req.body.From,
            body: "Welcome to Chatbot 👋 by Lalit Chauhan.\n1. Enter 'send me an image' for a sample image.\n2. Enter 'send me a video' for a sample video.\n3. Enter 'send me a document' for a sample document."
          })
          .then(message => res.send(message))
          .catch(err => {
            console.log(err);
            res.send(err)
          })
    }
  });

app.listen(3000, () => {
  console.log('Server Started');
});