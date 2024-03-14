import { useNavigate } from 'react-router-dom';

const useNavigateIfTokenEmpty = (token) => {
  const navigate = useNavigate();
  if (!token) {
    navigate("/");
  }
};

export default useNavigateIfTokenEmpty;
