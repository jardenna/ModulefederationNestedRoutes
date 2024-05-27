import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const NavigateButton: FC = () => {
  const navigate = useNavigate();
  return (
    <button type="button" onClick={() => navigate('contact/form')}>
      Click
    </button>
  );
};
export default NavigateButton;
