import express,{ application } from "express";

export class App{
    app:;
    constructor (){
        this.app=express();
    }

    listen(){
        this.app.listen(3000,()=>console.log('hola'))
    }
}