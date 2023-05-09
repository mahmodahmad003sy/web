import { UserData } from "./class";

export class Attributes<T> {
  constructor(private data: T) {}

  get<k extends keyof T>(key: k): T[k] {
    return this.data[key];
  }
  set(newData: T) {
    Object.assign(this.data, newData);
  }
}

const att = new Attributes<UserData>({ id: 1, name: "name" });
const id = att.get("id");
const name = att.get("name");
