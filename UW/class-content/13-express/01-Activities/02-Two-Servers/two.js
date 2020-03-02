const http = require('http');
const PORT_0 = 7000;
const PORT_1 = 7500;

const handleRequest_0 = (req, res) => {
  res.end(`Inspirational quote... 1`);
};

const server_0 = http.createServer(handleRequest_0);

server_0.listen(PORT_0, () => {
  console.log(`Listening on PORT ${PORT_0}`);
});

const handleRequest_1 = (req, res) => {
  res.end(`Inspirational quote... 2`);
  console.log('res :', res);
};

const server_1 = http.createServer(handleRequest_1);

server_1.listen(PORT_1, () => {
  console.log(`Listening on PORT ${PORT_1}`);
});
