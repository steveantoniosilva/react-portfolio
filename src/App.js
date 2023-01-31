import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Resume from './components/Resume';
import NoPage from './components/NoPage';
import Sidebar from './components/Sidebar';
import Portfolio from './components/Portfolio';
import MusicApp from './components/MusicApp';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={<Sidebar />}>
          <Route
            index
            element={<Home />}
          />
          <Route
            path='portfolio'
            element={<Portfolio />}
          />
          <Route
            path='music-app'
            element={<MusicApp />}
          />
          <Route
            path='contact'
            element={<Contact />}
          />
          <Route
            path='resume'
            element={<Resume />}
          />
          <Route
            path='*'
            element={<NoPage />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
