const express  = require('express')
const axios = require('axios')
const redis = require('redis')
const error = require('mongoose/lib/error')

const app = express()
app.use(express.json())

let redisClient;

(async ()=>{
    redisClient = redis.createClient();
    redisClient.on("erorr", (error)=>console.log(`Error:${error}`))
    await redisClient.connect();
})()

async function fetchApiData(species){
    const apiResponse = await axios.get(
        `https://www.fishwatch.gov/api/species/${species}`
    );
    console.log("Request sent to the API")
    return apiResponse.data
}

async function getSpeciesData(req, res){
    const species = req.params.species;
    console.log(species);
    let results;
    let isCached = false;

    try{
        console.log("------------------",species)
        const cacheResult = await redisClient.get(species);
        if(cacheResult){
            console.log("Got from cache")
            isCached = true;
            results = JSON.parse(cacheResult);
        }
        else{
            console.log("Got from END Point")
            results = await fetchApiData(species);
            if(results.length === 0){
                throw new Error(`No data found for ${species}`)
            }
            await redisClient.set(species,JSON.stringify(cacheResult),{
                EX: 20,
                NX: true
            })
        }
        res.send({
            fromCache: isCached,
            data: results,
        }); 
    }catch(error){
        console.log(error)
        res.send(404).send("Data Unavailable")
    }
}

app.get("/fish/:species", getSpeciesData);

app.listen(3000, ()=>{
    console.log("App listening on PORT:3000")
})