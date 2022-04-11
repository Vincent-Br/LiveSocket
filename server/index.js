// dependencies
    // express / api
const express = require("express");
const client = express();
const PORT = '8080';
    // ws / websocket
const WebSocket = require("ws");

// setup
client.use(express.json()); // all data to JSON
const wss = new WebSocket.Server({port: PORT}); // create websocket server

// functions
    // websocket
wss.on('connection', socket => {
    console.log('connected');

    socket.on('message', message => {
        socket.send('hello');
        console.log('message send' + msg.toString());
    });

    socket.on('close', () => {
        console.log('closed');
    });
});

    // api
client.get("/api/:data", (req, res) => {
    const { data } = req.params;

    res.status(200);
});

client.get("/redir/:url", (req, res) => {
    const { url } = req.params;

    res.status(200);
});
