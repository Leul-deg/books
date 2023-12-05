import axios from "axios";
console.log(process.env.key)

export const axiosInstance = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/volumes',
  params: {
    key: process.env.key,
  }
})

export interface FetchResponse<T> {
  count: number
  next: string
  previous: string
  results: T[]
}

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (query?: object) => {
    return axiosInstance.get<FetchResponse<T>>(this.endpoint, query).then(res => res.data);
  }

  getDetails = async(slug?: string) => {
    return axiosInstance.get<T>(this.endpoint + "/" + slug).then(res => res.data);
  }
}

export default ApiClient


// "https://www.googleapis.com/books/v1/volumes?q=" +
// search +
// "&key=AIzaSyDumNH8oyTQXjmCmfjcLn1II64OHJdXfkU" +
// "&maxResults=40"