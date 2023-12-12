import { ConversationActions } from '../constants/conversationActions.js';
import conversationActionHandlers from './actionHandlers.js';

const defaultActionHandler = {
    handle: (senderPsid, action, message) => {
        const actionHandler = ConversationActions[action];
        if (actionHandler) {
          actionHandler(senderPsid, message);
        } else {
            conversationActionHandlers.handleInvalidInput(senderPsid, message);
        }
    },
};

export default defaultActionHandler;