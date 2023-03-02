import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <Link to="/" className="link">
          <li>React + TS</li>
        </Link>
        <Link to="/ReactHooks" className="link">
          <li>React Hooks</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
