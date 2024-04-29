const { createClient }=require("redis");

const client=createClient({
    url: "redis://redis-server:6379"
});

client.on('connect', () => console.log(`Redis is connected on port ${6379}`));

client.on("error",err=>{
    console.log("Error Connecting to Redis Client",err)
});

async function connectToRedisClient()
{
    try {
        await client.connect();
        return client;
      } catch (error) {
        throw error;
      }
    
}

module.exports={
    connectToRedisClient,
    client
};