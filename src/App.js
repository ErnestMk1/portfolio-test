import st from'./App.module.css';
import Header from './Header/Header';
import NavBar from './NavBar/NavBar';
import ProfileContainer from './Profile/ProfileContainer';
import MessagesContainer from './Messages/MessagesContainer';
import Settings from './Settings/Settings';
import News from './News/News';
import Users from './Users/Users';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className={st.App}>
        <Header name='Ernest' age='18'/>
        <NavBar/>
        <div className={st.contentPage}>
          <Routes>
            <Route path='/messages' element={<MessagesContainer />}/>
              <Route path='/profile' element={<ProfileContainer />}/>
            <Route path='/settings' element={<Settings />}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/users' element={<Users />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
