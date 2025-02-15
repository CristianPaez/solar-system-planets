export interface HttpClientConfig {
  baseURL: string;
  headers: Record<string, string>;
  params?: Record<string, string>;
}

export type RequestParams = Record<string, string | number>;

export interface IHttpClient {
  get<T>(url: string, params?: RequestParams): Promise<T>;
}
