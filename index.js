const express = require('express')
const app = express()
const port = 3000;

const getPDFText =require('./getPdfText')
pdfdata=null;
getPDFText("sample.pdf").then(data => {
    pdfdata=data.text;
    console.log(data)
}).catch(err => {
    console.log(err)
})

let hel="hello"



app.get('/', (req, res) => res.send(pdfdata))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))