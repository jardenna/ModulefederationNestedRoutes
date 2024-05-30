import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Path } from '../enums';

const formPath = `${Path.app1Path}/form`;

const NavigateButton: FC = () => {
  const navigate = useNavigate();
  return (
    <button type="button" onClick={() => navigate(formPath)}>
      Click
    </button>
  );
};
export default NavigateButton;
