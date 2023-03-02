import { useEffect, useState, useCallback } from 'react';

import UseCallback from './UseCallback';
import UseMemo from './UseMemo';

type User = {
  id: number;
  name: string;
};

const ReactHooks = () => {
  const [users, setUsers] = useState<User[] | null>(null);

  useEffect(() => {
    console.log('Users: ', users);
  }, [users]);

  return (
    <div className="reactHooks">
      <div className="hooks">
        <UseCallback />
        <UseMemo />
      </div>
    </div>
  );
};

export default ReactHooks;
