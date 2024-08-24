const fs = require("node:fs");

const stats = fs.statSync("./archivo.txt");

// Síncrono
console.log(
  stats.isFile(),
  stats.isDirectory(),
  stats.isSymbolicLink(),
  stats.size
);
