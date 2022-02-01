import st from'./App.module.css';
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import Profile from './Profile/Profile';
import Messages from './Messages/Messages';
import Settings from './Settings/Settings';
import News from './News/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={st.App}>
        <Header name='Ernest' age='18'/>
        <NavBar/>
        <div className={st.contentPage}>
          <Routes>
            <Route path='/messages' element={<Messages
              namesData={props.state.namesData}
              messagesData={props.state.messagesData}
            />}/>
              <Route path='/profile' element={<Profile
                postsInfo={props.state.postsInfo}
                dispatch={props.dispatch}
                newPostText={props.state.newPostText}
              />}/>
            <Route path='/settings' element={<Settings/>}/>
            <Route path='/news' element={<News/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
