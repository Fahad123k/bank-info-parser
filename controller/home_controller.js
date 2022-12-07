
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
    console.log(pdf);


    const getPDFText = require('../getPdfText')
    pdfdata =null;
    getPDFText(pdf).then(data => {
        pdfdata = data.text;
        // console.log("inside"+pdfdata)
        return res.render('PdfToTable', {
            title: "rendered pdf",
            name: name,
            data: pdfdata
        })
    }).catch(err => {
        console.log(err)
    })
console.log("outside:"+pdfdata)
    
}

