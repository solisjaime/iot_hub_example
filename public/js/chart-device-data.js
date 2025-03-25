/* eslint-disable max-classes-per-file */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
$(document).ready(() => {
  // if deployed to a site supporting SSL, use wss://
  const protocol = document.location.protocol.startsWith('https') ? 'wss://' : 'ws://';
  const webSocket = new WebSocket(protocol + location.host);

  // When a web socket message arrives...
  webSocket.onmessage = function onMessage(message) {
    try {

      //parse the incoming message

      //find device in list or add it if necessary

    } catch (err) {
      console.error(err);
    }
  };
});
