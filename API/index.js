
const { createEventAdapter } = require('@slack/events-api');
const signingSecret = '18f5076f59f044ae7e7d49236007b853';
const app = require('express')();

const slackEvents = createEventAdapter(signingSecret);

const Firestore = require('@google-cloud/firestore');

    const db = new Firestore({
      projectId: 'monologue-266217'
    });

app.use('/slack/events', slackEvents.expressMiddleware());

slackEvents.on('message', (event) => {
    console.log('Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}');
    publishNotification(event.ts, event.text);

});

slackEvents.on('message.channels', (event) => {
    console.log('Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}');
	publishNotification(event.ts, event.text);
});

slackEvents.on('message.groups', (event) => {
    console.log('Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}');
	publishNotification(event.ts, event.text);
});

slackEvents.on('message.im', (event) => {
    console.log('Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}');
	publishNotification(event.ts, event.text);
});

slackEvents.on('message.mpim', (event) => {
    console.log('Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}');
	publishNotification(event.ts, event.text);
});

exports.slackapi = app;

function publishNotification(ts, notificationDataObject)
{
    db.collection('notifs').doc(ts).set({
        "text": notificationDataObject
    });
}









