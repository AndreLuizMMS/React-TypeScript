import { Dispatch } from 'react';

import { Contacts } from './Challenge';

type ContactListProps = {
  contacts: Contacts[];
  selectedId: number;
  dispatch: Dispatch<any>;
};

export default function ContactList({
  contacts,
  selectedId,
  dispatch
}: ContactListProps) {
  return (
    <section className="contact-list">
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <button
              onClick={() => {
                // TODO: dispatch changed_selection
                console.log();
                dispatch({ type: 'changed_selection', contactId: contact.id });
              }}
            >
              {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
