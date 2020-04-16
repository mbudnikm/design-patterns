const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const PdfPrinter = require('pdfmake')
import { pdfFactory } from './lib/PDFFactory'

// https://pdfmake.github.io/docs/

import { DocumentFactory } from './lib/DocumentFactory'
const docFactory = new DocumentFactory()

const filepath = 'test.pdf'

pdfFactory.generate(docFactory.createDocument(), filepath)
  .then(() => {
    console.log(`\nFile ${chalk.cyan(filepath)} generated successfully!`)
  })

