


function getShortMessages(messages) {
  // SOLUTION GOES HERE
  const messageArray = messages;
  const sMessages = messageArray.map(please => please.filter(x => x.length < 50));
  return sMessages;
}


module.exports = getShortMessages

