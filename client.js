const ampq = require('amqplib');
const helpers = require('./helpers');

ampq.connect('URL_SERVER_RABBITMQ')
  .then((conn) => {
    console.log("CONNECTED");

    return conn.createChannel();
  })
  .then((ch) => {
    console.log("Channel created");
    ch.assertQueue('002').then((ok) => {
    
      setInterval(() => {
        ch.sendToQueue('002', helpers.JSONtoBuffer({
          data: new Date()
        }));
        console.log("Message", new Date());
      }, 5000);

    });
  });