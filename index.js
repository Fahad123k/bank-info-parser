const express = require('express')
const app = express()
const port = 3000;
const path = require('path');
// const db= require('./config/mongoose')
// const getPDFText =require('./getPdfText')
// pdfdata=null;
// getPDFText("sample.pdf").then(data => {
//     pdfdata=data.text;
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })




app.use(express.urlencoded());
app.use(express.static('./assets'))



// let choose our view or template directory as public
app.set('view engine', 'ejs')
// create a new folder for view
app.set('views', path.join(__dirname, 'views'))


app.use('/', require('./routes'))
// app.get('/', (req, res) => res.send('hello world'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))