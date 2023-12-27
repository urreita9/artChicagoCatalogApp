import axios from 'axios';
import {baseURL, baseURL_artworks} from './api_urls';
import {getAllArtWorksParams, getArtWorkId} from './types';

const api = axios.create({
  baseURL,
});

const ArtWorkAPI = {
  getAllArtWorks: async function (params: getAllArtWorksParams) {
    const {data} = await api.get(baseURL_artworks, {params});
    return data;
  },
  getArtWorkById: async function (artWorkId: getArtWorkId) {
    const {data} = await api.get(baseURL_artworks + `/${artWorkId.id}`);
    return data;
  },
};

export default ArtWorkAPI;
