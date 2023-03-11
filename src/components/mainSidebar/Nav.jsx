import { Link } from 'react-router-dom';

export default function Nav({ isOpen, setOpen, onClick }) {
  return (
    <div className='navMenu'>
      <nav onClick={onClick}>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/skills'>Skills</Link>
          </li>
          <li>
            <Link to='/resume'>Resume</Link>
          </li>
          <li>
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
          <li className='nav-github'>
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
