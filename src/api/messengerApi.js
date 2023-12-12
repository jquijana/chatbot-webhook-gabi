import axios from 'axios';

const messengerApi = {
  callSendAPI_v2: async (messageData) => {
    const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

    try {
      const apiResponse = await axios.post('https://graph.facebook.com/v13.0/me/messages', messageData, {
        params: {
          access_token: PAGE_ACCESS_TOKEN,
        },
      });

      console.log('Message sent!', apiResponse.data);

    } catch (error) {
      console.error('Unable to send message:', error.message);
      throw error;
    }
  },

  callSendAPI: async (senderPsid, response) => {
    const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

    const requestBody = {
      recipient: {
        id: senderPsid,
      },
      message: response,
    };

    try {
      const apiResponse = await axios.post('https://graph.facebook.com/v7.0/me/messages', requestBody, {
        params: {
          access_token: PAGE_ACCESS_TOKEN,
        },
      });

      console.log('Message sent!', apiResponse.data);
    } catch (error) {
      console.error('Unable to send message:', error.message);
      throw error;
    }
  },
};

export default messengerApi;