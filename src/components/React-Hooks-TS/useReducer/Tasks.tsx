// dispatch( < {} > ) {} == action

import { useReducer, ReducerWithoutAction } from 'react';

import AddTask from './AddTask';
import TaskList from './TaskList';

type initState = {
  id: number;
  text: string;
  done: boolean;
};
const initialTasks: initState[] = [
  { id: 0, text: 'me contratar', done: true },
  { id: 1, text: 'TypeScript', done: false },
  { id: 2, text: '&', done: false },
  { id: 3, text: 'typeScript', done: false }
];

export type Tasks = {
  id: number;
  text: string;
  done: boolean;
};

const enum REDUCER_ACTION_TYPE {
  added,
  changed,
  deleted
}

type reducerActions = {
  type: REDUCER_ACTION_TYPE;
  id?: number;
  task?: Tasks;
  text?: string;
};

const taskReducer = (state: any, action: reducerActions) => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.added: {
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          done: false
        }
      ];
    }
    case REDUCER_ACTION_TYPE.changed: {
      return state.map((t: Tasks) => {
        if (t.id === action.task!.id) {
          return action.task;
        }
        return t;
      });
    }
    case REDUCER_ACTION_TYPE.deleted: {
      return state.filter((t: Tasks) => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};

const Tasks = () => {
  const [state, dispatch] = useReducer(taskReducer, initialTasks);

  function handleAddTask(text: string) {
    if (text == '') {
      return;
    }
    dispatch({ type: REDUCER_ACTION_TYPE.added, id: nextId++, text: text });
  }

  function handleChangeTask(task: Tasks) {
    dispatch({ type: REDUCER_ACTION_TYPE.changed, task: task });
  }

  function handleDeleteTask(id: number) {
    dispatch({ type: REDUCER_ACTION_TYPE.deleted, id: id });
  }

  return (
    <div className="tasks">
      <h1>Tasks list</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={state}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

let nextId = 4;

export default Tasks;
