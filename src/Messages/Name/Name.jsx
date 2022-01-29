import { NavLink } from 'react-router-dom';
import st from './Name.module.css';

const Name = (props) => {
  const active = {
    color: "#ffd900",
  };

  return (
    <div className={st.name}>
      <NavLink
        to={props.id}
        style={({ isActive }) => isActive ? active : undefined}
      >{props.name}</NavLink>

      <div className={st.avaDiv}>
        <img
          className={st.ava}
          src={props.img}
          alt="ava"
        />
      </div>
    </div>
  );
};

export default Name;
