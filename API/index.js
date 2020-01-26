const { WebClient } = require('@slack/web-api');
const token = process.env.d62a1452f835983e66fcff1c3cad4681;
const web = new WebClient(token);
const https = require('https');

exports.helloWorld = (req, res) => {
    //sendMessage();
    receiveNewMessages();
    res.send('Hello, World');
};

function sendMessage() {
    var postBody = {
        token: 'xoxp-881911229938-920885728916-909500976514-5a50c71b1264f64c919fd2f318c10aaa',
        channel: 'GSRFH8D5Y',
        text: 'test',
        as_user: 'true'
    }

    const res = web.chat.postMessage(postBody);
}

function receiveNewMessages() {
    var postBody = {
        client_id : '881911229938.910783800067',
        scope : 'users:read'
    }
}

function authorization() {
    var postBody = {
        
    }
}




