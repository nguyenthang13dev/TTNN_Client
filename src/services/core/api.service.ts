import axios, { AxiosInstance } from "axios"

class ApiServiceBase {
    private static instance: ApiServiceBase
    private api: AxiosInstance

    private constructor() {
        this.api = axios.create({
            baseURL: process.env.NEXT_API_URL,
            timeout: 20000
        })

        // config request trước khi gửi đi
        this.api.interceptors.request.use(
            (config) => {
            const token = localStorage.getItem("access_token")
            if(token) {
                config.headers.Authorization = `Bear ${token}`
            }
            return config;
            }, (error) => Promise.reject(error)
        )
        // config reqquesot sau khi gửi đi
        this.api.interceptors.response.use(
            (response) => {
                return response
            }, (err) => {
                return Promise.reject(err)
            }
        )
    }  


    public async get<T> (url: string) {

    }
}