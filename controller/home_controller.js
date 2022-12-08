
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
    let CustomerNamePosition;
    let CustomerName=""
    // console.log(pdf);


    pdfdata =null;
    getPDFText(pdf).then(data => {
        pdfdata = data;
     
        // fs.writeFile('newfile.txt', pdfdata.text, function (err) {
        //     if (err) throw err;
        //     console.log('File is created successfully.');
        //   });

            bankDataArray=pdfdata.text.split('\n')
            let lengthBank=bankDataArray.length;
            let DetailArray=[]
            let statement=[];
            let transactions=[]
            // console.log(bankDataArray.length)
            for (let index = 0; index < bankDataArray.length; index++) {
                let element = bankDataArray[index];

                // nameC= /Name\s(.*?)Address/i.exec(element)[1].trim()
                // console.log("data:",index,element)
                // CustomerNamePosition=element.search('Customer Name:')
                if(element.search('Name')>0){
                    // console.log("insie :")
                    CustomerName=element.split(':')
                    DetailArray.push(CustomerName)
                    // console.log(CustomerName)
                }
                if(element.search(':')>0){
                    // console.log(" :")
                    // CustomerName=
                    // DetailArray.push(CustomerName)
                    // console.log("running")
                    //  console.log(element.split(' '))
                     statement.push(element.split(' '))
                }

                if(element.search('Transaction')>0){

                    console.log("insie :",element.split(" "))
                    // CustomerName=element.split(':')
                    // DetailArray.push(CustomerName)
                    // // console.log(CustomerName)
                }
               
                
            }
            // console.log("customer name found "+DetailArray)


        return res.render('PdfToTable', {
            title: "Bank DataParser",
            name: name,
            // data: JSON.stringify(pdfdata.text)
            DetailArray:DetailArray,
            statement:statement,
            bankDataArray:bankDataArray
        })
    }).catch(err => {
        console.log(err)
    })
// console.log("outside:"+pdfdata)
    
}

