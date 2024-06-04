import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { SubPathEnums } from '../enums';

const Nav: FC = () => (
  <nav>
    <NavLink to={SubPathEnums.Info}>Info</NavLink>
    <NavLink to={SubPathEnums.About}>About</NavLink>
  </nav>
);
export default Nav;
