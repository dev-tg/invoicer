const http= require('http');
const app=require('./app');
const port =process.env.OPENSHIFT_NODEJS_PORT;
const address = process.env.OPENSHIFT_NODEJS_IP;

const server= http.createServer(app);
server.listen(port,address);
console.log("server is listening to "+address +" "+ +port);
