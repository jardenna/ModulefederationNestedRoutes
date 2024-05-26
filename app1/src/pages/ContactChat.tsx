import { FC } from 'react';
import { NavLink } from 'react-router-dom';

interface ContactChatProps {}
const ContactChat: FC<ContactChatProps> = () => {
  return (
    <div>
      <h1>Contact Chat</h1>
      <NavLink to="/">return to contact </NavLink>
    </div>
  );
};
export default ContactChat;
