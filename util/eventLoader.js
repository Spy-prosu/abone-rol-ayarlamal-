const reqEvent = (event) => require(`../events/${event}`);
module.exports = client => {
  client.on('ready', () => reqEvent('ready')(client));//Spy Code
  client.on('message', reqEvent('message'));
};

