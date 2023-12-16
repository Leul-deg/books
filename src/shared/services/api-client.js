import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: "890ea5ed05f74ea29abbe40cb73c8467"
  }
});

class ApiClient {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getAll(query) {
    return axiosInstance.get(this.endpoint, { params: query }).then(res => res.data);
  }

  getDetails(slug) {
    return axiosInstance.get(`${this.endpoint}/${slug}`).then(res => res.data);
  }
}

export default ApiClient;