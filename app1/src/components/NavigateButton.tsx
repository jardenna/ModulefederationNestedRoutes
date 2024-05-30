import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface NavigateButtonProps {
  variant: 'sm' | 'lg';
}
const NavigateButton: FC<NavigateButtonProps> = ({ variant }) => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className={`btn-${variant}`}
      onClick={() => navigate('contact/form')}>
      Click
    </button>
  );
};
export default NavigateButton;
