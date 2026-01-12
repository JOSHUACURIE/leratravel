import './Header.css'
import { NavLink } from 'react-router-dom';

type HeaderProps = {
  headername: string;
  list: { name: string; path: string;icon: React.ReactNode }[];
};

export const Header: React.FC<HeaderProps> = ({ headername, list }) => {
  return (
    <div className="header">
      <div className='header-name'>
        <h1>{headername}</h1>
      </div>
      <ul className='nav-list'>
        {list.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              end={item.path === "/"} 
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <span className="icon">{item.icon}</span>{item.name} 
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
