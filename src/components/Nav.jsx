import { Link } from 'react-router-dom';

export default function Nav({ isOpen, setOpen, onClick }) {
  return (
    <div className='nav'>
      <nav onClick={onClick}>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/portfolio'>Portfolio</Link>
          </li>
          <li>
            <Link to='/resume'>Resume</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='*'>404</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
