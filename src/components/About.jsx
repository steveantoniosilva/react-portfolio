import photo from '../assets/headshot.jpg';
import '../css-components/About.css'

export default function About() {
  return (
    <div>
      {' '}
      <div className='about-image-div'>
        <img
          src={photo}
          alt='head-shot'
        />
      </div>
    </div>
  );
}
