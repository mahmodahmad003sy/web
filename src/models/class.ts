import axios, { AxiosResponse, AxiosError } from "axios";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
import { Attributes } from "./Attrs";

export interface UserData {
  name?: string;
  age?: number;
  id?: number;
}

export class User {
  public eventing: Eventing = new Eventing();
  public sync: Sync<UserData> = new Sync<UserData>("http://localhost:3000");
  public attr: Attributes<UserData>;

  constructor(userData: UserData) {
    this.attr = new Attributes<UserData>(userData);
  }
}
