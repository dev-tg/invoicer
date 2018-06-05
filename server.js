const http= require('http');
const app=require('./app');
const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080
const address= process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'

const server= http.createServer(app);
server.listen(port,address);
console.log("server is listening to "+address +" "+ +port);
