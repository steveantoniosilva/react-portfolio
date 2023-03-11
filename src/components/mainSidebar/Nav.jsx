import { Link } from 'react-router-dom';

export default function Nav({ isOpen, setOpen, onClick }) {
  return (
    <div className='navMenu'>
      <nav onClick={onClick}>
        <ul>
          <li className='main-link'>
            <Link to='/'>Home</Link>
          </li>
          <li className='main-link'>
            <Link to='/skills'>Skills</Link>
          </li>
          <li className='main-link'>
            <Link to='/resume'>Resume</Link>
          </li>
          <li className='main-link'>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/music-app'>👉 Music App</Link>
          </li>
          <li>
            <Link to='/tesla-app'>👉 Tesla App</Link>
          </li>
          <li>
            <Link to='/weather-app'>👉 Weather App</Link>
          </li>
          <li>
            <Link to='/pomodoro-app'>👉 Pomodoro App</Link>
          </li>
          <li className='nav-github main-link'>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://github.com/steveantoniosilva'>
              Source Code
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
