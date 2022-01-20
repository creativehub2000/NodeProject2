"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
// const HOST = '127.0.0.1`';
const PORT = process.env.PORT || 3000;
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.get(`/`, (req, res) => {
    res.send(`Welcome to our latest API's!!!`);
});
// server.all( `*`, (req, res) => {
//     res.status( 200 ).send( `Welcome to our API's` );
// });
server.listen(PORT, () => {
    console.log(`Server running at ${PORT}...`);
});
