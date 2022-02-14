import st from './Users.module.css';

const Users = (props) => {
  return (
    <div className={st.mainDiv}>
      {
        props.users.map((user) => <div key={user.id} className={st.position}>
          <div className={st.firstBlock}>
            <div className={st.imgDiv}>
              <img
                src={user.photoUrl}
                alt="profile pic"
                className={st.profilePic}
              />
            </div>

            <div className={st.btnDiv}>
              {user.followed ? <button
                className={st.btn}
                onClick={ () => {props.unfollow(user.id)}}
              >Unfollow</button> : <button
              className={st.btn}
              onClick={ () => {props.follow(user.id)}}
            >Follow</button>}
            </div>
          </div>

          <div className={st.secondBlock}>
            <div className={st.name_msg}>
              <div className={st.name}>
                {user.name}
              </div>

              <div className={st.msg}>
                {user.message}
              </div>
            </div>

            <div className={st.location}>
              <div className={st.country}>
                {user.location.country}
              </div>

              <div className={st.city}>
                {user.location.city}
              </div>
            </div>
          </div>
        </div>)
      }
    </div>
  );
};

export default Users;
