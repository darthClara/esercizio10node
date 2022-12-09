const fs = require('fs');
  
let testo = "Questo è un file .txt creato con Node";
  
fs.writeFile("file.txt", testo, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("file creato!");
  }
});

