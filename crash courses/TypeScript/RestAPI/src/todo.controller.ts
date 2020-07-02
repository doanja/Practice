import * as express from 'express';
import * as mongodb from 'mongodb';
import { MongoHelper } from './mongo.helper';

const todoRoutes = express.Router();

const getCollection = () => {
  return MongoHelper.client.db('todo').collection('todos');
};

todoRoutes.get('/todo', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  //   res.json([{ id: 1, description: 'buy bread' }]);
  const collection = getCollection();
  collection.find({}).toArray((err, items) => {
    if (err) {
      res.status(500);
      res.end();
      console.error('caught error', err);
    } else {
      items = items.map(item => {
        return { id: item._id, description: item.description };
        res.json(items);
      });
    }
  });
});

todoRoutes.post('/post', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const description = req.body['description'];
  const collection = getCollection();
  collection.insert({ description: description });
  res.end();
});

todoRoutes.put('/todo/:id', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const description = req.body['description'];
  const id = req.params['id'];
  const collection = getCollection();

  collection.findOneAndUpdate({ _id: new mongodb.ObjectId(id) }, { $set: { description } });

  res.end();
});

todoRoutes.delete('/todo/:id', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const id = req.params['id'];
  const collection = getCollection();

  collection.remove({ _id: new mongodb.ObjectID(id) });

  res.end();
});

export { todoRoutes };
