import { useNavigate } from 'react-router-dom';

const useNavigateIfTokenNotEmpty = (token) => {
  const navigate = useNavigate();
  if (token) {
    navigate("/dashboard");
  }
};

export default useNavigateIfTokenNotEmpty;
