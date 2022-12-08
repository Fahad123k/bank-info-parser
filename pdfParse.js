const fs = require("fs");
// const PDFParser = require("pdf2json");
import PDFParser from './node_modules/pdf2json/pdfparser'
// const PDFParser  = require("pdf2json");

const inputStream = fs.createReadStream("sample01.pdf", {bufferSize: 64 * 1024});
const outputStream = fs.createWriteStream("F1040EZ.json");

inputStream.pipe(new PDFParser()).pipe(new StringifyStream()).pipe(outputStream);