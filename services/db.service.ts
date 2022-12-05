import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

class Database {
  public client: Client | any;
  constructor() {
    this.connect();
  }

  async connect() {
    this.client = new Client({
      user: "postgres",
      database: "freshelemon",
      hostname: "localhost",
      password: "pass",
      port: 5432,
    });

    await this.client.connect();
  }
}

export default new Database().client;
