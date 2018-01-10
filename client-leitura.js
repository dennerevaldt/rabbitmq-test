const ampq = require('amqplib');
const helpers = require('./helpers');

ampq.connect('URL_SERVER_RABBITMQ')
  .then((conn) => {
    return conn.createChannel();
  })
  .then((ch) => {
    ch.prefetch(1);
    ch.consume("001", (msg) => {
      console.log(msg.content.toString());
      setTimeout(() => {
        ch.ack(msg);
      }, 2000);
    });
    // ch.deleteQueue("001").then((res) => console.log(" >>>> ", res)); Remove queue
  });