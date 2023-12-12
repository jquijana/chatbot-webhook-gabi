import messengerApi from "../api/messengerApi.js";
import defaultActionHandler from "../handlers/defaultActionHandler.js";
import defaultConversationHandler from "../handlers/defaultConversationHandler.js";

const messengerController = {
    handleMessage: (senderPsid, receivedMessage) => {
        const currentStatus = getCurrentUserStatus(senderPsid);
        defaultConversationHandler.handle(senderPsid, currentStatus, receivedMessage);

        /*let response;

        if (receivedMessage.text) {
            response = {
                'text': `You sent the message: '${receivedMessage.text}'. Now send me an attachment!`,
            };
        } else if (receivedMessage.attachments) {
            let attachmentUrl = receivedMessage.attachments[0].payload.url;
            response = {
                'attachment': {
                    'type': 'template',
                    'payload': {
                        'template_type': 'generic',
                        'elements': [{
                            'title': 'Is this the right picture?',
                            'subtitle': 'Tap a button to answer.',
                            'image_url': attachmentUrl,
                            'buttons': [
                                {
                                    'type': 'postback',
                                    'title': 'Yes!',
                                    'payload': 'yes',
                                },
                                {
                                    'type': 'postback',
                                    'title': 'No!',
                                    'payload': 'no',
                                },
                            ],
                        }],
                    },
                },
            };
        }

        messengerApi.callSendAPI(senderPsid, response);
        */
    },

    handlePostback: (senderPsid, receivedPostback) => {
        const currentState = getCurrentUserStatus(senderPsid);
        const action = receivedPostback.payload;
        defaultActionHandler.handle(senderPsid, action, receivedPostback);
        /*
        let response;

        let payload = receivedPostback.payload;

        if (payload === 'yes') {
            response = { 'text': 'Thanks!' };
        } else if (payload === 'no') {
            response = { 'text': 'Oops, try sending another image.' };
        }

        messengerApi.callSendAPI(senderPsid, response);*/
    },
};

export default messengerController;

const getCurrentUserStatus = (senderPsid) => {
    return 'START';
};