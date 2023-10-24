import  Express  from "express";

const router =Express.Router();

router.get('/',(_req,res)=>{
res.send('hola')
})

router.post('/',(_req,res)=>{
    res.send('hola') 
})

export