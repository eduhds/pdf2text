#!/usr/bin/env -S node --no-warnings

const fs = require('fs');
const pdf = require('pdf-parse/lib/pdf-parse');

const args = process.argv.slice(2);

const pdfFile = args[0];

(async () => {
  try {
    if (!pdfFile || !pdfFile.endsWith('.pdf')) {
      throw new Error('Invalid argument. Must pass a PDF file like: "./pdf2text file.pdf"');
    }
    const data = await pdf(fs.readFileSync(pdfFile));
    console.log(data.text);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
