import express from 'express';
import diaryRouter from './routes/diaries'
const app = express();
app.use(express.json());

const PORT=3000;

app.get('/ping', (_req,res)=>{
    
    console.log('hola mundooo');
    res.send('pong')

});

app.listen(PORT,()=>{
    console.log("Corriendo en: "+PORT)
})

