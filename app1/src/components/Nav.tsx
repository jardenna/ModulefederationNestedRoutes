import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { SubPathEnums } from '../enums';

const Nav: FC = () => (
  <nav>
    <ul>
      <li>
        <NavLink to={SubPathEnums.Form}>Contact form</NavLink>
      </li>
      <li>
        <NavLink to={SubPathEnums.Chat}>Contact Chat</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
