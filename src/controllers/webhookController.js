import messengerController from "./messengerController.js";

const webhookController = {
    getWebhook: (req, res) => {
        const VERIFY_TOKEN = "Y2hhdGJvdC1nYWJpLXdlZWJob29r" //process.env.VERIFY_TOKEN;
        let mode = req.query['hub.mode'];
        let token = req.query['hub.verify_token'];
        let challenge = req.query['hub.challenge'];

        console.debug('mode', mode);
        console.debug('token', token);
        console.debug('challenge', challenge);

        if (mode && token) {
            if (mode === 'subscribe' && token === VERIFY_TOKEN) {
                console.log('WEBHOOK_VERIFIED');
                res.status(200).send(challenge);
            } else {
                res.sendStatus(403);
            }
        } else {
            res.sendStatus(403);
        }
    },

    postWebhook: (req, res) => {
        let body = req.body;
        console.debug('body', body);

        if (body.object === 'page') {
            body.entry.forEach(function (entry) {
                let webhookEvent = entry.messaging[0];
                console.log(webhookEvent);

                let senderPsid = webhookEvent.sender.id;
                console.log('Sender PSID: ' + senderPsid);

                if (webhookEvent.message) {
                    messengerController.handleMessage(senderPsid, webhookEvent.message);
                } else if (webhookEvent.postback) {
                    messengerController.handlePostback(senderPsid, webhookEvent.postback);
                }
            });

            res.status(200).send('EVENT_RECEIVED');
        } else {
            res.sendStatus(404);
        }
    }
};

export default webhookController;
