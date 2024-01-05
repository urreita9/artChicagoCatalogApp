import {useState} from 'react';

interface Props {
  initialCount?: number;
}

const useProductCounter = ({initialCount = 0}: Props) => {
  const [counter, setCounter] = useState(initialCount);
  const increaseBy = (value: number) => {
    setCounter(prev => Math.max(prev + value, 0));
  };

  return {
    counter,
    increaseBy,
  };
};

export default useProductCounter;
