import express,{ Application, application } from "express";

export class App{
    app:Application;
    constructor (){
        this.app=express();
    }

    async listen(){
        this.app.listen(3000)
    }
}