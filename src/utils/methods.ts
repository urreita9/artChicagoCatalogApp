import {Platform} from 'react-native';
import {ArtWorksData} from '../services/ArtWorkAPI/types';

export const artInstitute = {
  lat: 41.8795845,
  lng: -87.625902,
  label: 'Art Insitute of Chicago',
  address: '111 South Michigan Avenue',
  city: 'Chicago, IL 60603',
};

export const getMapCoords = () => {
  const scheme = Platform.select({ios: 'maps://0,0?q=', android: 'geo:0,0?q='});
  const latLng = `${artInstitute.lat},${artInstitute.lng}`;

  return (
    Platform.select({
      ios: `${scheme}${artInstitute.label}@${latLng}`,
      android: `${scheme}${latLng}(${artInstitute.label})`,
    }) || ''
  );
};

export const getRandomItem = (data: ArtWorksData[]) => {
  const randomIndex = Math.floor(Math.random() * data.length);
  return data[randomIndex];
};
