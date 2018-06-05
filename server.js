const http= require('http');
const app=require('./app');
const port =process.env.OPENSHIFT_NODEJS_PORT || 8080;
const address = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";

const server= http.createServer(app);
server.listen(port,address);
console.log("server is listening to "+address +port);