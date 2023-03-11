import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import Resume from './components/resume/Resume.jsx';
import NoPage from './components/NoPage';
import MainSidebar from './components/mainSidebar/MainSidebar';
import MusicApp from './components/MusicApp';
import PomodoroApp from './components/pomodoro/PomodoroApp';
import Tesla from './components/Tesla';
import WeatherApp from './components/WeatherApp';
import Skills from './components/Skills';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={<MainSidebar />}>
          <Route
            index
            element={<Home />}
          />
          <Route
            path='contact'
            element={<Contact />}
          />
          <Route
            path='skills'
            element={<Skills />}
          />
          <Route
            path='resume'
            element={<Resume />}
          />
          <Route
            path='music-app'
            element={<MusicApp />}
          />
          <Route
            path='pomodoro-app'
            element={<PomodoroApp />}
          />
          <Route
            path='tesla-app'
            element={<Tesla />}
          />
          <Route
            path='weather-app'
            element={<WeatherApp />}
          />
        </Route>
        <Route
          path='*'
          element={<NoPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
