import { SYNC_REQUEST, SYNC_SUCCESS } from './types';
const p = true;
export const sync = () => {
  return (dispatch) => {
    dispatch({ type: SYNC_REQUEST });
    syncProcess()
    .then(() => {
      console.log('syncProcess invole then');
      dispatch({ type: SYNC_SUCCESS });
    })
    .catch(() => console.log('syncProcess catch'));
  };
};


export const queueSync = () => {
  return {
    type: SYNC_REQUEST,
    queue: 'BLE_QUEUE', // 所有蓝牙相关的操作都放 BLE_QUEUE 这个队列
    callback: (next, dispatch) => {
      syncProcess(p)
      .then(() => {
        p = false;
        console.log('syncProcess invole then');
        dispatch({ type: SYNC_SUCCESS });
        next();
      })
      .catch(() => { console.log('syncProcess catch'); p = true; next(); });
    },
  };
};

// 测试测试
const syncProcess = (p) => {
  console.log('into syncProcess funcion');
  if (p) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('syncProcess resolve');
        resolve(true);
      }, 3000);
    });
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('syncProcess reject');
      reject(true);
    }, 3000);
  });
};
