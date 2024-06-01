import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { PathEnums } from '../enums';

const formPath = `${PathEnums.app1Path}/form`;

interface NavigateButtonProps {
  variant: 'sm' | 'lg';
}
const NavigateButton: FC<NavigateButtonProps> = ({ variant }) => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className={`btn-${variant}`}
      onClick={() => navigate(formPath)}>
      Click
    </button>
  );
};
export default NavigateButton;
