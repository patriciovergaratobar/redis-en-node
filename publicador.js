var redis = require('redis');
var cliente = redis.createClient();
  
cliente.on('error', (err) =>  console.log('Error en la conexión - ' + err));

setInterval(() => {

    let channelName = "channel-gps";
    let payload = "Fecha mensaje " + (new Date());
    cliente.publish(
        channelName, 
        payload, 
        (err, reply) => 
        console.log((reply === 0 ? "No hay subscriptor" : (reply + " subcriptor ok."))));
}, 1000); 

setInterval(() => {

    let channelName = "channel-gps2";
    let payload = "Fecha mensaje del 2 " + (new Date());
    cliente.publish(
        channelName, 
        payload, 
        (err, reply) => 
        console.log((reply === 0 ? "No hay subscriptor" : (reply + " subcriptor ok."))));
}, 500);

setInterval(() => {

    let channelName = "channel-borrachin";
    let payload = "Comiendo pan con chucrut a las " + (new Date());
    cliente.publish(
        channelName, 
        payload, 
        (err, reply) => 
        console.log((reply === 0 ? "No hay subscriptor" : (reply + " subcriptor ok."))));
}, 2000); 
//client.quit((err, res) => console.log('Quitando la conexion.'));