import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { SubPathEnums } from '../enums';

const Nav: FC = () => (
  <nav>
    <ul>
      <li>
        <NavLink to={SubPathEnums.Info}>Info</NavLink>
      </li>
      <li>
        <NavLink to={SubPathEnums.About}>About</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
