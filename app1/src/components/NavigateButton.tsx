import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { PathEnums } from '../enums';

const formPath = `${PathEnums.AppPath}/form`;

const NavigateButton: FC = () => {
  const navigate = useNavigate();
  return (
    <button type="button" onClick={() => navigate(formPath)}>
      Click
    </button>
  );
};
export default NavigateButton;
