import axios from 'axios';
import {baseURL, baseURL_artworks} from './api_urls';
import {getAllArtWorksParams, getArtWorkId} from './types';
import {ArtWorksResponse} from './interfaces/AllArtWorks';

const api = axios.create({
  baseURL,
});

const ArtWorkAPI = {
  getAllArtWorks: async function (params: getAllArtWorksParams) {
    const res = await api.get<ArtWorksResponse>(baseURL_artworks, {params});
    return res.data;
  },
  getArtWorkById: async function (artWorkId: getArtWorkId) {
    const res = await api.get(baseURL_artworks + `/${artWorkId.id}`);
    return res.data;
  },
};

export default ArtWorkAPI;
