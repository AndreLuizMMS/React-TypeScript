export const initialState = {
  selectedId: 0,
  messages: {
    0: 'Hello, Taylor ',
    1: 'Hello, Alice ',
    2: 'Hello, Bob '
  }
};

export const enum REDUCER_ACTION_TYPE {
  changed_selection,
  edited_message,
  sent
}

type reducerActions = {
  type: REDUCER_ACTION_TYPE;
  contactId?: number;
  message: string;
};

export function messengerReducer(state: typeof initialState, action: reducerActions) {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.changed_selection: {
      return {
        ...state,
        selectedId: action.contactId
      };
    }
    case REDUCER_ACTION_TYPE.edited_message: {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: action.message
        }
      };
    }
    case REDUCER_ACTION_TYPE.sent: {
      alert('Message sent');
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: ''
        }
      };
    }
    default: {
      throw Error('error at: ' + action.type);
    }
  }
}
