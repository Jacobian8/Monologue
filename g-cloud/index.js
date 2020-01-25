var SmoochCore = require('smooch-core');

const KEY_ID = 'act_5e2cb5aff24866000f6b2038';
const SECRET = 'ofzRyr6GBGqQZJ6nm6zHQy1IA37MK-GO3MBxg7oHmrbRH1EJiOpIJKO1ATqq28uZlLa1P9rCt3dSKK8VPVS3Sg	';

// using JWT components
var smooch = new SmoochCore({
    keyId: KEY_ID,
    secret: SECRET,
    scope: 'Monologue'
});

// ...

smooch.webhooks.get(id).then(function(response) {
    // do something with the response.
});

exports.helloWorld = (req, res) => {
    res.send('Hello, World');
  };

