// dispatch( < {} > ) {} == action

import { useReducer } from 'react';

import AddTask from './AddTask';
import TaskList from './TaskList';

export type Tasks = {
  id: number;
  text: string;
  done: boolean;
};

const taskReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'added': {
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          done: false
        }
      ];
    }
    case 'changed': {
      return state.map((t: Tasks) => {
        if (t.id === action.task.id) {
          return action.task;
        }
        return t;
      });
    }
    case 'deleted': {
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
    dispatch({ type: 'added', id: nextId++, text: text });
  }

  function handleChangeTask(task: Tasks) {
    dispatch({ type: 'changed', task: task });
  }

  function handleDeleteTask(id: number) {
    dispatch({ type: 'deleted', id: id });
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
const initialTasks = [
  { id: 0, text: 'me contratar', done: true },
  { id: 1, text: 'TypeScript', done: false },
  { id: 2, text: '&', done: false },
  { id: 3, text: 'typeScript', done: false }
];

export default Tasks;
