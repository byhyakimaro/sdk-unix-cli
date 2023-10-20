const fs = require('node:fs');
const path = require('node:path');

const fileCreate = process.argv[2];
const directoryFile = path.join(process.cwd(), fileCreate);

fileCreate ? fs.writeFileSync(directoryFile, '') : new Error('write file name in first arg');