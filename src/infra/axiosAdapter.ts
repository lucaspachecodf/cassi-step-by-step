import axios, { AxiosError, AxiosRequestHeaders, AxiosResponse } from "axios";
import HttpClient from "./httpClient";

export default class AxiosAdapter implements HttpClient {
  router: any;

  private status(response?: AxiosResponse<any, any>) {
    return response?.data;
  }

  async get(url: string, headers: AxiosRequestHeaders): Promise<any> {
    return new Promise(async (resolve, reject) => {
      await axios({
        url,
        method: "get",
        headers,
      })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error: AxiosError) => {
          reject(this.status(error.response));
        });
    });
  }

  async post(
    url: string,
    data: any,
    headers: AxiosRequestHeaders
  ): Promise<any> {
    return new Promise(async (resolve, reject) => {
      await axios({
        url,
        method: "post",
        data,
        headers,
      })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error: AxiosError) => {
          reject(this.status(error.response));
        });
    });
  }

  put(url: string, data: any): Promise<any> {
    throw new Error("Method not implemented.");
  }

  delete(url: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
