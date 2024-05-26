import { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface ContactProps {}
const Contact: FC<ContactProps> = () => {
  return (
    <div>
      <h1>Contact</h1>
      <NavLink to="/">Return to home</NavLink>
    </div>
  );
};
export default Contact;
