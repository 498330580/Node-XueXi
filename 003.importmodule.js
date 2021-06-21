// 引入其他模块
// 在node中，通过require()函数来引入外部的模块
//     require()可以传递一个文件的路径作为参数，node将会自动根据该路径来引入模块
//     require()引入模块以后，该函数会返回一个对象，这个对象代表的是引入的模块

// 模块分为两大类
// -核心模块
// -文件模块

// 文件模块↓

var md = require("./002.module");     // 引入002模块,md表示引入的模块对象
var math = require("./math");

// import {add, adds, mul, x} from "./math";    // es6语法，export定义，import导入的方式

console.log(md);

console.log(math.add(2, 2));
console.log(math.mul(2, 2));

// console.log(adds(5, 5));


// 核心模块↓
var fs = require("fs")
console.log(fs);

