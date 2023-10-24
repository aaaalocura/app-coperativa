import express from 'express';
const app = express;
app.use(express.json());

const PORT=3000;

app.get('/ping', (req,res)=>{
    console.log('hola mundo');
    res.send
})

