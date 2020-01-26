function publishNotification(userid, notificationDataObject)
{
    const Firestore = require('@google-cloud/firestore');

    const db = new Firestore({
      projectId: 'monologue-266217'
    });
    db.collection('notifs').doc('alovelace')
}
