import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { PathEnums } from '../enums';

const Nav: FC = () => (
  <nav>
    <ul className="nav">
      <li>
        <NavLink to={PathEnums.App1Path}>App1</NavLink>
      </li>
      <li>
        <NavLink to={PathEnums.App2Path}>App2</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
