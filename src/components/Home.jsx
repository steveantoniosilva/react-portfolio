import '../css-components/Home.css';

export default function Home() {
  return (
    <div className='home'>
      <div className='title'>
        <div>
          <h1>Steve</h1>
        </div>
        <div>
          <h1 className='antonio'>Antonio</h1>
        </div>{' '}
        <div>
          <h1>Silva</h1>
        </div>
      </div>
      <div className='sub-title'>
        {' '}
        <p>
          <span className='react-span'>React |</span>
          <span className='engineer-span'>Engineer</span>
        </p>
      </div>
    </div>
  );
}
