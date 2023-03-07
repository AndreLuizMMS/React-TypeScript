import { useReducer } from 'react';
import { Link } from 'react-router-dom';

import Chat from './Chat';
import ContactList from './contactList';

import { initialState, messengerReducer } from './messengeReducer';

const challengeUrl =
  'https://beta.reactjs.org/learn/extracting-state-logic-into-a-reducer#challenges';

export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const contact = contacts.find(c => c.id === state.selectedId);
  const message = state.messages[contact!.id];
  return (
    <div className="useReducer-chall">
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat key={contact!.id} message={message} contact={contact!} dispatch={dispatch} />
      <div className="resources">
        <a href={challengeUrl} target="_blank" className="link-sm">
          Challenge Resource <span className="code">´reactjs.org´</span>
        </a>
        <Link to='/ReactHooks/challenge/4' className='code'>
          challenge 4
        </Link>
      </div>
    </div>
  );
}

export type Contacts = {
  id: number;
  name: string;
  email: string;
};

const contacts: Contacts[] = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
];
