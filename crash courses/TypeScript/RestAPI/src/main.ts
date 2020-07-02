import { app } from './app';
import * as http from 'http';
import { MongoHelper } from './mongo.helper';

const PORT = 8080;

const server = http.createServer(app);

server.listen(PORT);
server.on('listening', async () => {
  console.log(`listening on por ${PORT}`);

  try {
    await MongoHelper.connect('mongodb://10.0.0.129:27017');
  } catch (err) {
    console.error(err);
  }
});
