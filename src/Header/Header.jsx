import st from './Header.module.css';

const Header = (props) => {
  return (
    <div className={st.headerMain}>
      <h1 className={st.logoName}>SPA</h1>
    </div>
  );
};

export default Header;
