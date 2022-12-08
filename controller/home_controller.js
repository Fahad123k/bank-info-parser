
module.exports.home = function (req, res) {
    return res.render('home',

        {
            title: "sweet home"
        }
    )
}

module.exports.create = function (req, res) {

    let name = req.body.name;
    let pdf = req.body.myfile;
    const fs = require("fs")
    const getPDFText = require('../getPdfText')
    let bankDataArray=[];
    // console.log(pdf);


    pdfdata =null;
    getPDFText(pdf).then(data => {
        pdfdata = data;
     
        // fs.writeFile('newfile.txt', pdfdata.text, function (err) {
        //     if (err) throw err;
        //     console.log('File is created successfully.');
        //   });

            bankDataArray=pdfdata.text.split('\n')
            // console.log(bankDataArray.length)
            for (let index = 0; index < bankDataArray.length; index++) {
                const element = bankDataArray[index];
                console.log("data:",index,element)
                
            }


        return res.render('PdfToTable', {
            title: "rendered pdf",
            name: name,
            data: JSON.stringify(pdfdata.text)
        })
    }).catch(err => {
        console.log(err)
    })
// console.log("outside:"+pdfdata)
    
}

