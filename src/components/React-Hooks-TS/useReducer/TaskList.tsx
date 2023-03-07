import { useState } from 'react';

import { Tasks } from './Tasks';

type TaskListProps = {
  tasks: Tasks[];
  onChangeTask: (e: Tasks) => void;
  onDeleteTask: (e: number) => void;
};

export default function TaskList({ tasks, onChangeTask, onDeleteTask }: TaskListProps) {
  return (
    <ul className="taskList-ul">
      {tasks.map(task => (
        <li key={task.id} className="taskList-li">
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

type TaksProps = {
  task: Tasks;
  onChange: (e: Tasks) => void;
  onDelete: (e: number) => void;
};

function Task({ task, onChange, onDelete }: TaksProps) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          className="editing-input"
          onChange={e => {
            onChange({
              ...task,
              text: e.target.value
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        <span key={task.id}>{task.text}</span>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <div className="task-box">
      <input
        type="checkbox"
        checked={task.done}
        onChange={e => {
          onChange({
            ...task,
            done: e.target.checked
          });
        }}
      />
      <div className="buttons">
        {taskContent}
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
}
