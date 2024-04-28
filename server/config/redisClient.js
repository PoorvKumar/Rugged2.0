const { createClient }=require("redis");

const client=createClient({
    port: 6379
});
client.on("error",err=>{
    console.log("Error Connecting to Redis Client",err)
});

// async function connectToRedisClient()
// {
//     await client.connect();
//     console.log("Connected to Redis Client");
// }

// connectToRedisClient();

client.on('connect', () => console.log(`Redis is connected on port ${6379}`));

module.exports=client;