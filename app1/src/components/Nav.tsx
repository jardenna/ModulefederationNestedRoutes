import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { SubPathEnums } from '../enums';

const Nav: FC = () => (
  <nav>
    <NavLink to={SubPathEnums.Form}>Contact form</NavLink>
    <NavLink to={SubPathEnums.Chat}>Contact Chat</NavLink>
  </nav>
);

export default Nav;
