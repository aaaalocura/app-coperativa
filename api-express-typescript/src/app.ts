import express, { Application } from "express";
import morgan from 'morgan'
export class App {

  private app: Application;

  constructor() {
    this.app = express();
    this.middleware()
  }
  middleware(){
    this.app.use(morgan('dev'))
  }

  async listen() {
    await this.app.listen(3000);
    console.log("corriendo gg");
  }
}
