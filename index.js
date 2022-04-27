const express = require('express');
const app = express();
const port= process.env.PORT || 5000;
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

app.use(cors())
app.use(express.json());



const uri = "mongodb+srv://user1:cruQjOXLzJfEPf7x@cluster0.wcunk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

//node mongodb CRUD operation
async function run(){
    //js try catch finally
    try{
        await client.connect();
        const userCollection = client.db("express").collection('user');
        
        app.post('/user', (req, res)=>{
            const newUser = req.body;
            console.log('adding new user.', newUser);
            res.send({result: 'success'})
        })
    }
    finally{
        await client.close();
    }
}

run().catch(console.dir)

app.get('/', (req, res)=>{
    res.send('Running My node CRUD Server')
});

app.listen(port, ()=>{
    console.log('CRUD Server is Running', port);
})



//user: user1
//pass: cruQjOXLzJfEPf7x