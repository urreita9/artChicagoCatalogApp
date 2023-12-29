import {useState, useRef, useEffect, useCallback} from 'react';
import ArtWorkAPI from '../services/ArtWorkAPI/ArtWorkAPI';
import {useStore} from '../app/store';
import {ArtWorksResponse} from '../services/ArtWorkAPI/interfaces/AllArtWorks';
import {FAVORITES_SCREEN, HOME_SCREEN} from '../navigation/constants';
import {useFocusEffect} from '@react-navigation/native';

interface Props {
  screen: typeof FAVORITES_SCREEN | typeof HOME_SCREEN;
}

const useArtWorks = ({screen}: Props) => {
  const [loading, setLoading] = useState(true);
  const [moreDataLoading, setMoreDataLoading] = useState(false);
  const [artWorks, setArtWorks] = useState<ArtWorksResponse>();
  const [currentPage, setCurrentPage] = useState(1);
  const lastPage = useRef(1);

  const {favoriteArtWorks} = useStore();

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

      switch (screen) {
        case HOME_SCREEN:
          setHomeArtWorks(res);
          break;
        case FAVORITES_SCREEN:
          setFavoriteArtWorks(res);
          break;
        default:
          setHomeArtWorks(res);
          break;
      }
    } catch (error) {
      console.log('error', error);
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
  };
};

export default useArtWorks;
