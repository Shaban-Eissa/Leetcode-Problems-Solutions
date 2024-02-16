/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
  let decodedMessage = "";
  key = Array.from(new Set(key.split(" ").join("")));
  const alpha = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < message.length; i++) {
    if (message[i] === " ") {
      decodedMessage += " ";
      continue;
    }
    let index = key.indexOf(message[i]);
    decodedMessage += alpha[index];
  }

  return decodedMessage;
};