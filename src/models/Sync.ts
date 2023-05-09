import axios, { AxiosPromise } from "axios";

interface HasId {
  id?: number;
}
export class Sync<T extends HasId> {
  constructor(public url: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.url}/users/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;
    if (id) {
      return axios.put(`${this.url}/users/${id}`, data);
    } else {
      return axios.post(`${this.url}/users`, data);
    }
  }
}
