import Socket from 'socket.io-client';

const { SOCKET_URL = 'http://localhost:8000' } = process.env;
const socket = Socket(SOCKET_URL);

export const subscribeToVerification = (number, cb, errorCb) => {
  socket.on('verified', cb);
  (typeof errorCb === 'function') && socket.on('verificationFailed', errorCb);
  socket.emit('subscribeToVerification', number);
};
