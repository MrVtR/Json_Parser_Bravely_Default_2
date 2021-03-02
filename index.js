'use strict';

const fs = require('fs');

// let rawdata = fs.readFileSync('TitleTextAsset.json');
let rawdata = fs.readFileSync('Ev00_0120.json');
let data = JSON.parse(rawdata);

// console.log('\n------Descrições da pasta Text-------');
// data[0].BasicTextDataMap.forEach((description) => {
//   console.log(description.value.string, '\n');
// });

console.log('\n------Descrições da pasta Scenario-------');
for (let i = 0; i < 9; i++) {
  console.log(data[0][i].Speech.key);
  console.log('');
}
for (let i = 0; i < 9; i++) {
  console.log(data[0][i].Speech.string);
  console.log('');
}
