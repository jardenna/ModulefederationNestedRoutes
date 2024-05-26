import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface NavigateButtonProps {}
const NavigateButton: FC<NavigateButtonProps> = () => {
  const navigate = useNavigate();
  return (
    <button type="button" onClick={() => navigate('contact/form')}>
      Click
    </button>
  );
};
export default NavigateButton;
