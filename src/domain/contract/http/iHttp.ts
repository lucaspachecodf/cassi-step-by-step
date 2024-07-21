import HttpClient from "infra/httpClient"

export interface IHttp {
    httpClient: HttpClient
    baseUrl: string
}