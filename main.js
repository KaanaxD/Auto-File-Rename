let fs = require("fs-extra");
let path = require("path");

let inputPath = path.join(__dirname, "input");
let outputPath = path.join(__dirname, "output");

function rename() {
  const files = fs.readdirSync(inputPath);
  files.forEach((item) => {
    const data = fs.readJSONSync("data.json");
    const ext = path.extname(item);
    const outputFile = path.join(outputPath, `${data.nama_file}-${data.id}` + ext);
    const inputFile = path.jozin(inputPath, "input", item);
    
    fs.renameSync(inputFile, outputFile);
    console.log(`berhasil mengubah nama file ${item} menjadi ${data.nama_file}-${data.id}${ext}`);
    fs.writeJSONSync("data.json", {
      nama_file: data.nama_file,
      id: data.id + 1,
    });
  });
}

function checkDir() {
  const checkIn = fs.existsSync(inputPath);
  const checkOut = fs.existsSync(outputPath);
  if (!checkOut) {
    fs.mkdirSync(outputPath);
  }
  if (!checkIn) {
    fs.mkdirSync(inputPath);
  }
  rename();
}

checkDir();
