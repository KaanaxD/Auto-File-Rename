let fs = require("fs-extra");
let path = require("path");

let inputPath = path.join(__dirname, "input");
let outputPath = path.join(__dirname, "output");

function rename() {
  const files = fs.readdirSync(inputPath);
  files.forEach((item) => {
    let id = fs.readJSONSync("data.json").id;
    const ext = path.extname(item);
    const outputPath = path.join(__dirname, "output", `aset-${id}` + ext);
    const input = path.join(__dirname, "input", item);
    fs.renameSync(input, outputPath);
    console.log(`berhasil mengubah nama file ${item} menjadi aset-${id}${ext}`);
    fs.writeJSONSync("data.json", {
      id: id + 1,
    });
  });
}

function checkDir() {
  const checkIn = fs.existsSync(inputPath);
  const checkOut = fs.existsSync(outputPath);
  if (!checkOut) {
    fs.mkdirSync(outputPath);
  } else if (!checkIn) {
    fs.mkdirSync(inputPath);
  }

  
  rename();
}

checkDir();
