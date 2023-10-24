import express, { Application } from "express";
import morgan from 'morgan'
export class App {

  private app: Application;

  constructor() {
    this.app = express();
  }
  midde

  async listen() {
    await this.app.listen(3000);
    console.log("corriendo gg");
  }
}
