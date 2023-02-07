export default function ResumeLandingPage() {
  return (
    <div>
      <div className='resume-landing-page'>
        <div className='resume-landing-page-img'></div>
        <div className='resume-name'>
          <h1>
            <span className='resume-firstName'>Steve</span>{' '}
            <span
              style={{
                fontStyle: 'italic',
              }}
              className='resume-secondName'>
              Antonio
            </span>{' '}
            <span className='resume-thirdName'>Silva</span>
          </h1>
          <h2>React + Javascript Engineer</h2>
        </div>
      </div>
    </div>
  );
}
