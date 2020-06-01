import fs from 'fs';
import { CsvFileReader } from './CsvFileReader';

const csvFileReader = new CsvFileReader('euroviosion.csv');
console.log(csvFileReader);
