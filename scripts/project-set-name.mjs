import readline from "readline";
import editJsonFile from "edit-json-file";

const filePaths = ["package.json", "client/public/manifest.json"];

function setField(field, value) {
  filePaths.forEach(path => {
    const jsonFile = editJsonFile(path);
    const fieldExists = !!jsonFile.get(field);
    if (fieldExists) {
      jsonFile.set(field, value);
      jsonFile.save();
    }
  });
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Name for project: ", name => {
  setField('name', name);
  console.log(`Name set to: ${name}`);

  rl.question("Short Name for project: ", shortName => {
    setField('short_name', shortName);
    console.log(`Short Name set to: ${shortName}`);

    rl.close();
    process.exit(0); // needed to make WebStorm exit script
  });
});

