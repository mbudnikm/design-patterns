const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const PdfPrinter = require('pdfmake')

// https://pdfmake.github.io/docs/

const fonts = {
  Helvetica: {
    normal: 'Helvetica',
    bold: 'Helvetica-Bold',
    italics: 'Helvetica-Oblique',
    bolditalics: 'Helvetica-BoldOblique'
  }
}

const horizontalRule = ({ lineColor, x1 = 0 }) => ({
  canvas: [
    {
      type: 'line',
      x1,
      y1: 0,
      x2: 535,
      y2: 0,
      lineWidth: 0.5,
      lineColor
    }
  ]
})

const docDefinition = {
  pageSize: 'A4',
  pageMargins: [70, 70, 70, 70],
  defaultStyle: {
    font: 'Helvetica'
  },
  styles: {
    title: {
      fontSize: 48,
      bold: true,
      decoration: 'underline',
      margin: [0, 10, 0, 0],
    },
    subheader: {
      fontSize: 16,
      bold: true,
      margin: [0, 20, 0, 10],
    },
    footerText: {
      margin: [50, 10, 0, 0],
    }
  },
  footer: function (currentPage, pageCount) {
    return [
      horizontalRule({ lineColor: '#5B9BD5', x1: 50 }),
      {
        text: 'Elo Mordo Software',
        style: 'footerText'
      },
    ]
  },
  content: [
    // HEADER
    [
      {
        text: 'Cos sie dzieje',
        style: 'title',
      },
      {
        text: 'powolutku, do przodu...',
        style: 'subheader',
      },
      {
        text: 'all work and no play makes jack a dull boy!'
      },
    ],
    'Bulleted list example:',
    {
      // to treat a paragraph as a bulleted list, set an array of items under the ul key
      ul: [
        'Item 1',
        'Item 2',
        'Item 3',
        { text: 'Item 4', bold: true },
      ]
    },

    'Numbered list example:',
    {
      // for numbered lists set the ol key
      ol: [
        'Item 1',
        'Item 2',
        'Item 3'
      ]
    }
  ],
}

const printer = new PdfPrinter(fonts)
const pdfDoc = printer.createPdfKitDocument(docDefinition); // EXTERNAL
const outputPath = __dirname + `/elo.pdf`;
pdfDoc.pipe(fs.createWriteStream(outputPath));
pdfDoc.end();

pdfDoc.on('end', () => {
  setTimeout(() => {
    console.log(`\nFile ${chalk.cyan(outputPath)} generated successfully!`)
  }, 1500)
})
