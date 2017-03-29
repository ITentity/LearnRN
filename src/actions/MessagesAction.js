import { SEND_MESSAGES, SEND_SUCCESS } from './types';

export const sendMessages = () => {
  return (dispatch) => {
    dispatch({ type: SEND_MESSAGES });
    sendMessagesProcess()
    .then(() => {
      console.log('sendMessagesProcess invole then');
      dispatch({ type: SEND_SUCCESS });
    })
    .catch(() => console.log('sendMessagesProcess catch'));
  };
};


export const queueSendMessages = () => {
  return {
    type: SEND_MESSAGES,
    queue: 'BLE_QUEUE',
    callback: (next, dispatch) => {
      sendMessagesProcess()
      .then(() => {
        console.log('sendMessagesProcess invole then');
        dispatch({ type: SEND_SUCCESS });
        next();
      })
      .catch(() => console.log('sendMessagesProcess catch'));
    },
  };
};


// 测试测试
const sendMessagesProcess = () => {
  console.log('into sendMessagesProcess funcion');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('sendMessagesProcess resolve');
      resolve(true);
    }, 3000);
  });
};
