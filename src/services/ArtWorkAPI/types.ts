import {artWorkId} from '../../app/store';

export interface GetArtWorksParams {
  page: number;
  limit: number;
  ids?: string;
}

export interface GetArtWorkId {
  id: number;
}
