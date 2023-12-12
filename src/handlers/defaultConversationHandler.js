import { ConversationStatus } from '../constants/conversationStatus.js';
import conversationStatusHandlers from './conversationHandlers.js';

const defaultConversationHandler = {
    handle: (senderPsid, status, message) => {
        const actionHandler = ConversationStatus[status];
        if (actionHandler) {
          actionHandler(senderPsid, message);
        } else {
            conversationStatusHandlers.handleInvalidInput(senderPsid, message);
        }
    },
};

export default defaultConversationHandler;