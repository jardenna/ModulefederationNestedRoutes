import { FC } from 'react';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ContactProps {}
const Contact: FC<ContactProps> = () => (
  <div>
    <h1>Contact</h1>
    <NavLink to="/">Return to home</NavLink>
  </div>
);

export default Contact;
