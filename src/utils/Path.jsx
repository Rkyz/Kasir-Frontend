import { useLocation } from 'react-router-dom';

const useHookLocation = () => {
  const location = useLocation();
  return location;
};

export default useHookLocation;