import { createClient, RedisClient } from 'redis';

export default class Redis {
  public client: RedisClient = createClient();

  constructor() {
    this.initializeRedis();
  }

  private initializeRedis = () => {
    this.client.on('connect', () => {
      console.log('Client connected to redis...');
    });

    this.client.on('ready', () => {
      console.log('Client connected to redis and ready to use...');
    });

    this.client.on('error', err => {
      console.log(err.message);
    });

    this.client.on('end', () => {
      console.log('Client disconnected from redis');
    });

    process.on('SIGINT', () => {
      this.client.quit();
    });
  };
}
