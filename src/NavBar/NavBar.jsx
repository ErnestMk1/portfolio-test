import st from './NavBar.module.css';
import {  NavLink } from 'react-router-dom';

const NavBar = () => {
  let activeStyle = {
    color: '#000',
  };

  return (
    <div className={st.mainDiv}>
      <ul className={st.navList}>
        <li className={st.listElement}>
          <NavLink
            to='/profile'
            style={({ isActive }) => isActive ? activeStyle : undefined}
          >Profile</NavLink>
        </li>
        <li className={st.listElement}>
          <NavLink
            to='/messages'
            style={({isActive}) => isActive ? activeStyle : undefined}
          >Messages</NavLink>
        </li>
        <li className={st.listElement}>
          <NavLink
            to='/users'
            style={({isActive}) => isActive ? activeStyle : undefined}
          >Users</NavLink>
        </li>
        <li className={st.listElement}>
          <NavLink
            to='/settings'
            style={({isActive}) => isActive ? activeStyle : undefined}
          >Settings</NavLink>
        </li>
        <li className={st.listElement}>
          <NavLink
            to='/news'
            style={({isActive}) => isActive ? activeStyle : undefined}
          >News</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
