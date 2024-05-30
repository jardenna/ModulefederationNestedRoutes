import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const Info: FC = () => (
  <div>
    <h1>Info from app2</h1>
    <NavLink to="/">Return to home</NavLink>
  </div>
);

export default Info;
