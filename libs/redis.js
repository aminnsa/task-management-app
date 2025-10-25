import { createClient } from 'redis';

const redisClient = createClient();

redisClient.on('error', err => console.log('Redis Client Error', err));
if(!redisClient.isOpen){

    await redisClient.connect();
    console.log('Redis Client Connected');
}


export default redisClient;