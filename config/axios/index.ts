import axios, { AxiosInstance } from "axios";
import { HttpClientConfig, IHttpClient, RequestParams } from "./types";

class HttpClient implements IHttpClient {
  private axiosInstance: AxiosInstance;

  constructor(config: HttpClientConfig) {
    this.axiosInstance = axios.create(config);
  }

  async get<T>(url: string, params?: RequestParams): Promise<T> {
    const response = await this.axiosInstance.get<T>(url, { params });
    return response.data;
  }
}

const httpClientConfig: HttpClientConfig = {
  baseURL: "https://api.le-systeme-solaire.net/rest.php",
  headers: {
    "Content-Type": "application/json",
  },
};

export const httpClient: IHttpClient = new HttpClient(httpClientConfig);
