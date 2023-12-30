import axios from 'axios';
import {baseURL, baseURL_artworks} from './api_urls';
import {GetArtWorksParams, GetArtWorkId, ArtWorksResponse} from './types';

const api = axios.create({
  baseURL,
});

const ArtWorkAPI = {
  getAllArtWorks: async function (params: GetArtWorksParams) {
    const {data} = await api.get<ArtWorksResponse>(baseURL_artworks, {params});
    return data;
  },
  getArtWorkById: async function (artWorkId: GetArtWorkId) {
    const {data} = await api.get(baseURL_artworks + `/${artWorkId.id}`);
    return data;
  },
};

export default ArtWorkAPI;
