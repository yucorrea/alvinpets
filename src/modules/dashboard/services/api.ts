import axios, {AxiosInstance} from 'axios';
import {Platform} from 'react-native';

class HttpService {
  baseURL: string;
  IP: string;
  instance: AxiosInstance;

  constructor() {
    this.IP = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';
    this.baseURL = `http://${this.IP}:3000`;
    this.instance = axios.create({
      baseURL: this.baseURL,
    });
  }

  async fetchPets(): Promise<any> {
    try {
      const api = new HttpService();

      const response = await api.instance.get<any, any>('/pets', {});
      return response.data;
    } catch (e) {}
  }
}

export default HttpService;
