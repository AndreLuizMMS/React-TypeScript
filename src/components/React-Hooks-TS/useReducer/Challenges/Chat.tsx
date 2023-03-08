// import { useState } from 'react';

import { Dispatch } from 'react';
import { Contacts } from './Challenge';

import { REDUCER_ACTION_TYPE } from './messengeReducer';

type ChatProps = {
  contact: Contacts;
  message: string;
  dispatch: Dispatch<any>;
};

export default function Chat({ contact, message, dispatch }: ChatProps) {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={e => {
          // TODO: dispatch edited_message
          dispatch({ type: REDUCER_ACTION_TYPE.edited_message, message: e.target.value });
        }}
      />
      <br />
      <button
        onClick={() => {
          dispatch({ type: REDUCER_ACTION_TYPE.sent });
        }}
      >
        Send to {contact.email}
      </button>
    </section>
  );
}
