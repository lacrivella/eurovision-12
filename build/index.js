"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
//add .csv file into code and then console log entries
var entries = fs_1.default.readFileSync('.csv', {
    encoding: 'utf-8',
});
