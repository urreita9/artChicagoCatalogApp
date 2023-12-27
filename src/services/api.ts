import axios from 'axios';
import {baseURL, baseURL_artworks} from './api_urls';

const api = axios.create({
  baseURL,
});

class ApiService {
  getArtWork = async () => await api.get(baseURL_artworks);
}

export default ApiService;
