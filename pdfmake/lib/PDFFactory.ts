import fs from 'fs'
import { DocDefinition } from "./types";
import { fonts } from "./fonts";

// OOP
// brzytwa Ockhama / Ockham Razor
interface IPDFFactory {
  generate(docDefinition: DocDefinition, filepath: string): Promise<void>
}

// Promise<boolean>
// Promise.resolve(true) // +
// Promise.resolve(false) // 🔥
// Promise.reject(true) // 🔥
// Promise.reject(false) // +

// HTTP POST /item
// -> { status: "NOT FOUND" } // 200

const PdfPrinter = require('pdfmake')

export class PDFFactory implements IPDFFactory {
  constructor(
    private printer
  ){}

  generate(docDefinition: DocDefinition, filepath: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const pdfDoc = this.printer.createPdfKitDocument(docDefinition);
      pdfDoc.pipe(fs.createWriteStream(filepath));
      pdfDoc.end();
      
      pdfDoc.on('end', () => {
        resolve()
      })
    })
  }
}

const printer = new PdfPrinter(fonts)
export const pdfFactory = new PDFFactory(printer)
