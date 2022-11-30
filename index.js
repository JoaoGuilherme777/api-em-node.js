// const { Person } = require("./person");


const connectToDatabase = require("./src/database/connect");



connectToDatabase();

// // require("./modules/path");
// // require("./modules/fs");
// // require("./modules/http");

require("./modules/express");

// const person = new Person("Felipe");
