import dotenv from 'dotenv';
dotenv.config( );

import express from 'express';


// const HOST = '127.0.0.1`';
const PORT = process.env.PORT  || 3000;

const server = express( );
server.use( express.json() );

server.all( `*`, (req, res) => {
     res.status( 200 ).send( `Welcome to our new API's!` );
});

server.listen( PORT, ( ) => {
    console.log(`Server running at ${PORT}...`);
});
