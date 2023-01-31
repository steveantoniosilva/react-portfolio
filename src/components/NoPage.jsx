import { Link } from 'react-router-dom';
import '../css-components/NoPage.css';

export default function NoPage() {
  return (
    <div className='noPageButton'>
      <div className='message'>
        <h1>404 Page Not Fount</h1>
        <Link to='/'>
          <button>Go Back Home</button>
        </Link>
      </div>
    </div>
  );
}
