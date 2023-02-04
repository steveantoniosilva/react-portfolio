import '../css-components/Resume.css';

export default function Resume() {
  return (
    <div>
      <div className='resume-landing-page'>
        <div className='resume-landing-page-img'></div>
        <div className='resume-name'>
          <h1>
            <span className='resume-firstName'>Steve</span>{' '}
            <span className='resume-secondName'>Antonio</span>{' '}
            <span className='resume-thirdName'>Silva</span>
          </h1>
        </div>
      </div>
      <div className='resume-education-page'>
        <div>
          <h1 className='resume-education-h1'>Education</h1>
          <h2 className='resume-education-h2'>Boise State University</h2>
        </div>
        <div>
          <div className='resume-education-page-img'></div>
        </div>
        <div>
          <h3 className='resume-education-h3'>M.B.A. 19'</h3>
          <h4 className='resume-education-h4'>summa cum laude</h4>
          <h3 className='resume-education-h3'>
            B.A.S. <small>17'</small>
          </h3>
          <h4 className='resume-education-h4'>magna cum laude</h4>
        </div>
      </div>
    </div>
  );
}
