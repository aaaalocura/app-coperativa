import express,{ Application, application } from "express";

export class App{
    app:Application;
    constructor (){
        this.app=express();
    }

    asylisten(){
        this.app.listen(3000)
    }
}