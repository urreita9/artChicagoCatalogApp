import {useState, useRef, useEffect, useCallback} from 'react';
import ArtWorkAPI from '../services/ArtWorkAPI/ArtWorkAPI';
import {useStore} from '../app/store';
import {FAVORITES_SCREEN, HOME_SCREEN} from '../navigation/constants';
import {useFocusEffect} from '@react-navigation/native';
import {ArtWorksResponse} from '../services/ArtWorkAPI/types';
import {getRandomItem} from '../utils/methods';

interface Props {
  screen?: typeof FAVORITES_SCREEN | typeof HOME_SCREEN | null;
}

const useArtWorks = ({screen}: Props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [moreDataLoading, setMoreDataLoading] = useState(false);
  const [artWorks, setArtWorks] = useState<ArtWorksResponse>();
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = useRef(1);

  const {favoriteArtWorks, setRandomArtWorkDetails} = useStore();

  const setFavoriteArtWorks = (res: ArtWorksResponse) => {
    setArtWorks(() => ({
      ...res,
      data: res.data,
    }));
  };
  const setHomeArtWorks = (res: ArtWorksResponse) => {
    setArtWorks(prevArtWorks => ({
      ...res,
      data: [...(prevArtWorks?.data || []), ...res.data],
    }));
  };

  const getAllArtWorks = async () => {
    try {
      if (currentPage > lastPage.current) return;
      currentPage !== 1 && setMoreDataLoading(true);

      const res = await ArtWorkAPI.getAllArtWorks({
        page: currentPage,
        limit: 10,
        ids: screen === FAVORITES_SCREEN ? favoriteArtWorks.toString() : '',
      });

      lastPage.current = res.pagination?.total_pages || currentPage;
      const randomItem = getRandomItem([
        ...(artWorks?.data || []),
        ...res.data,
      ]);

      switch (screen) {
        case HOME_SCREEN:
          setRandomArtWorkDetails({
            artWork: {
              id: randomItem.id,
              artist: randomItem.artist_title || '',
              description: randomItem.description || '',
              dimensions: randomItem.dimensions || '',
              imageUrl:
                res?.config.iiif_url +
                  `/${randomItem.image_id}/full/843,/0/default.jpg` || '',
              altImage: randomItem.thumbnail?.alt_text || '',
              thumbnail: randomItem.thumbnail?.lqip || '',
              origin: randomItem.place_of_origin || '',
              title: randomItem.title || '',
              dateDisplay: randomItem.date_display,
            },
          });
          setHomeArtWorks(res);
          break;
        case FAVORITES_SCREEN:
          setFavoriteArtWorks(res);
          break;
        default:
          setHomeArtWorks(res);
          break;
      }
    } catch (err: any) {
      setError(err.message || 'Error');
    } finally {
      currentPage === 1 ? setLoading(false) : setMoreDataLoading(false);
    }
  };

  if (screen === FAVORITES_SCREEN) {
    useFocusEffect(
      useCallback(() => {
        getAllArtWorks();
      }, [favoriteArtWorks]),
    );
  }

  useEffect(() => {
    if (screen === HOME_SCREEN) {
      getAllArtWorks();
    }
  }, [currentPage]);

  const loadMoreArtWorks = () => {
    if (!loading && !moreDataLoading) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const addNextPage = () => {
    if (screen !== FAVORITES_SCREEN) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  return {
    loading,
    moreDataLoading,
    artWorks,
    loadMoreArtWorks,
    addNextPage,
    error,
  };
};

export default useArtWorks;
