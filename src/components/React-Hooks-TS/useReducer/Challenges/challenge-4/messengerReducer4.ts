import { REDUCER_ACTION_TYPE } from '../messengeReducer';

export const initialState = {
  selectedId: 0,
  messages: {
    0: 'Hello, Taylor',
    1: 'Hello, Alice',
    2: 'Hello, Bob'
  }
};

const names = ['Taylor', 'Alice', 'Bob'];

export function messengerReducer(state: any, action: any) {
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
      alert(`message sent to ${names[state.selectedId]}`);
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: ''
        }
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}
