// import library and component
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer/Footer';
import NavBar from './Component/NavBar/NavBar';
import Store from './Page/Store';
import BrowseGame from './Page/BrowseGame';
import News from './Page/News';
import Game from './Page/Game';
import LoginSignUp from './Page/LoginSignUp';
import Profile from './Page/Profile';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Store />} />
        <Route path='/browse' element={<BrowseGame />} />
        <Route path='/news' element={<News />} />

        <Route path='/game' element={<Game />}>
          <Route path=':gameId' element={<Game />} />
        </Route>
        <Route path='/profile' element={<Profile /> }/>
        <Route path='/login' element={<LoginSignUp />} />
      </Routes>
      <Footer />
      
      </BrowserRouter>
    </div>
  );
}

export default App;
