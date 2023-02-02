import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css-components/Portfolio.css';

export default function Portfolio() {
  const [show, setShow] = useState(false);

  const quote =
    '"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do." - - Steve Jobs';

  const quoteToArray = quote.split(' ');
  const map = quoteToArray.map((word, index) => (
    <span key={index}>{word}</span>
  ));

  setTimeout(() => {
    setShow(true);
  }, 9000);

  return (
    <div className='portfolio'>
      <div className='text-div'>
        <div>{map}</div>
      </div>
      {show && (
        <div className='buttonDiv'>
          <Link to='/music-app'>
            <button className='portfolioButton'>
              1st<i className='fa-regular fa-hand-point-down'></i>app
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
