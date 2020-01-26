const { WebClient } = require('@slack/web-api');
const { createEventAdapter } = require('@slack/events-api');
const https = require('https');
const token = process.env.d62a1452f835983e66fcff1c3cad4681;
const signingSecret = 'd62a1452f835983e66fcff1c3cad4681';
const web = new WebClient(token);
const app = require('express')();
const fs = require('fs');

const slackEvents = createEventAdapter(signingSecret);

app.use('/slack/events', slackEvents.expressMiddleware());

slackEvents.on('message.channels', (event) => {
    console.log('Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}');
});

slackEvents.on('message.groups', (event) => {
    console.log('Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}');
});

slackEvents.on('message.im', (event) => {
    console.log('Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}');
});

slackEvents.on('message.mpim', (event) => {
    console.log('Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}');
});

exports.helloWorld = (req, res) => {
    // const slackEvents = createEventAdapter(signingSecret);

    // app.use('/slack/events', slackEvents.expressMiddleware());

    // slackEvents.on('message.channels', (event) => {
    //     console.log('Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}');
    // });


    // //sendMessage();
    res.send('Hello, World');


};

exports.users = app;

function sendMessage() {
    var postBody = {
        token: 'xoxp-881911229938-920885728916-924555651494-0f20704889a75981c12cd3a2cd086bfd',
        channel: 'GSRFH8D5Y',
        text: 'TESTTTTT',
        as_user: 'true'
    }

    const res = web.chat.postMessage(postBody);
}










