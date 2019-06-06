var redis = require('redis');
var cliente = redis.createClient();
var count = 0;
cliente.on('error', (err) =>  console.log('Error en la conexión - ' + err));

/**
 * Callback evento psubscribe: Se ejecuta cuando se inicia la subscripción.
 */
cliente.on('psubscribe', (pattern, count) => console.log('Subscrito a ' + pattern + ', ' + count + ' total subscripciones'));

/**
 * Callback evento punsubscribe: Se ejecuta cuando se termina la subscripción
 */
cliente.on('punsubscribe', (pattern, count) => {

    console.log('Quitando subscripción para ' + pattern);
    //cliente.end();
});

cliente.on('pmessage', (pattern, channel, message) => {
    console.log('(' + pattern + ') client1 received message on ' + channel + ': ' + message);
    /*count += 1;
    if (count === 3) {
        cliente.punsubscribe();
    }*/
});

//cliente.psubscribe('*'); // Subscribir a todo.
//cliente.psubscribe('channel-gps2'); // Subscribir a channel-gps2.
//cliente.psubscribe('channel-gps*'); // Subscribir a todo lo que comience con channel-gps.
cliente.psubscribe('channel-*'); // Subscribir a todo lo que comience con channel-.
//psubscribe channel-*  desde la misma consola de redis-cli