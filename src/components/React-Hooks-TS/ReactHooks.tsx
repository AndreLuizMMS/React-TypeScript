import { Link } from 'react-router-dom';

import UseCallback from './UseCallback';
import UseMemo from './UseMemo';
import Tasks from './useReducer/Tasks';

type User = {
  id: number;
  name: string;
};

const ReactHooks = () => {
  return (
    <div className="reactHooks">
      <div className="hooks">
        <UseCallback />
        <UseMemo />
        <Tasks />
        <Link to="/ReactHooks/challenge" className="link">
          useReducer Challenge
        </Link>
      </div>
    </div>
  );
};

export default ReactHooks;
