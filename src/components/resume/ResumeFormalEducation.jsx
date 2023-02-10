export default function ResumeFormalEducation() {
  return (
    <div>
      {' '}
      <div
        style={{ backgroundColor: 'rgba(242, 121, 53, .9)' }}
        className='resume-education-page'>
        <div>
          <h1 className='resume-education-h1'>Education</h1>
          <h2 className='resume-education-h2'>Boise State</h2>
        </div>
        <div>
          <div className='resume-education-page-img'></div>
        </div>
        <div className='education-container'>
          <div>
            <h3 className='resume-education-h3'>M.B.A. 19'</h3>
            <h4 className='resume-education-h4'>summa cum laude</h4>
          </div>
          <div>
            <h3 className='resume-education-h3'>B.A.S. 17'</h3>
            <h4 className='resume-education-h4'>magna cum laude</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
