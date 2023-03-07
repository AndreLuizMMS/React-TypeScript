import { myReducer } from './MyReducer';

import Chat from '../Chat';
import ContactList from '../contactList';

import { initialState, messengerReducer } from './messengerReducer4';

export default function Challenge4() {
  const [stateCustom, dispatchCustom] = myReducer(messengerReducer, initialState);

  const message = stateCustom.messages[stateCustom.selectedId];
  const contact = contacts.find(c => c.id === stateCustom.selectedId);

  return (
    <div className="useReducer-chall">
      <ContactList
        contacts={contacts}
        selectedId={stateCustom.selectedId}
        dispatch={dispatchCustom}
      />
      <Chat
        key={contact!.id}
        message={message}
        contact={contact!}
        dispatch={dispatchCustom}
      />
    </div>
  );
}

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
];
