import express, { Application } from "express";
import morgan from 'mo'
export class App {
  private app: Application;
  constructor() {
    this.app = express();
  }

  async listen() {
    await this.app.listen(3000);
    console.log("corriendo gg");
  }
}
