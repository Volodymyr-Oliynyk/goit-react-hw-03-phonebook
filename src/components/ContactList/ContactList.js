import React from 'react';
import propTypes from 'prop-types';
import { Button } from 'components/common/CommonStyled';
import { ContactItem, List } from './ContactListstyled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <span>{name}</span> : <span>{number}</span>
          <Button onClick={() => onDeleteContact(id)}>Delete</Button>
        </ContactItem>
      ))}
    </List>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: propTypes.func.isRequired,
};
