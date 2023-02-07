import '../css-components/Home.css';

export default function Home() {
  return (
    <div className='home'>
      <div className='style-div'></div>
      <div className='title'>
        {' '}
        <p>
          <span>Steve </span> <span className='antonio'> Antonio</span>{' '}
          <span>Silva</span>
        </p>
        <div className='sub-title'>
          {' '}
          <p>Jr. React Engineer</p>
        </div>
      </div>
    </div>
  );
}
