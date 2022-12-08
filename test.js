const fs = require("fs")
const pdfparser = require("pdf-parse")

// const pdffile = fs.readFileSync("sample-text.pdf")

// pdfparser(pdffile).then(data => {
//     // console.log(data.info)
//     // console.log(data.numpages)
//     console.log(data.text)
// }).catch(err => {
//     console.log(err)
// })

// const pdffile = fs.readFileSync("sample.pdf")

// pdfparser(pdffile).then(data => {
//     console.log(data.info)
//     console.log(data.numpages)
//     // console.log(data.text)
// }).catch(err => {
//     console.log(err)
// })


const getPDFText = async (pdfFile, maxPages) => {
    let parsedPDF = ""
    let pdfBuffer = null
    try {
        if (fs.existsSync(pdfFile)) {
            pdfBuffer = fs.readFileSync(pdfFile)
            if (maxPages) {
                parsedPDF = await pdfparser(pdfBuffer, { max: maxPages })
            } else {
                parsedPDF = await pdfparser(pdfBuffer)
            }
            if (parsedPDF) {
                return parsedPDF;
            }
        }
    } catch (err) {
        return err.message
    }
}

// getPDFText("sample1-text.pdf").then(text => {
//     console.log(text)
// }).catch(err => {
//     console.log(err)
// })
let mydata=null
getPDFText("sample01.pdf").then(data => {
    mydata=data;
    console.log(data)
}).catch(err => {
    console.log(err)
})



const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send(mydata.text[0]))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

