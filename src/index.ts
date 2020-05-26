import fs from 'fs';

//add .csv file into code and then console log entries
const entries = fs.readFileSync('eurovision.csv', {
  encoding: 'utf-8',
});
