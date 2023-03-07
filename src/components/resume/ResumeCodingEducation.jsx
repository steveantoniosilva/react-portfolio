export default function ResumeCodingEducation() {
  return (
    <div>
      {' '}
      <div
        style={{ backgroundColor: 'white' }}
        className='resume-education-page'>
        <div>
          <h1
            style={{ color: '#555' }}
            className='resume-education-h1'>
            Coding Education
          </h1>
          <h2
            style={{
              color: '#999',
              fontSize: '1.25rem',
              letterSpacing: '.25vw',
            }}>
            Bootcamp / Self-Taught
          </h2>
          <div className='resume-education-coding-page-img'></div>
        </div>
        <div className='education-container'>
          <div>
            <div>
              <h3
                style={{ color: '#777', fontSize: '1.4rem' }}
                className='resume-education-h3'>
                Front-End DEV PATH
              </h3>
              <h4
                style={{ color: '#999' }}
                className='resume-education-h4'>
                Scrimba, <span style={{ fontSize: '1.1rem' }}>2022</span>
              </h4>
            </div>
            <h3
              style={{ color: '#777', fontSize: '1.4rem' }}
              className='resume-education-h3'>
              Coding Bootcamp
            </h3>
            <h4
              style={{ color: '#999' }}
              className='resume-education-h4'>
              Tech Talent South,{' '}
              <span style={{ fontSize: '1.1rem' }}>2021</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
