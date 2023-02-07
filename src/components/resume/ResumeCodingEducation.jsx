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
            Coding{' '}
            <span
              style={{
                fontWeight: '100',
              }}>
              Education
            </span>
          </h1>
        </div>
        <div>
          <div className='resume-education-coding-page-img'></div>
        </div>
        <div className='education-container'>
          <div>
            <h3
              style={{ color: '#555', fontSize: '1.25rem' }}
              className='resume-education-h3'>
              Epic React{' '}
            </h3>
            <h4
              style={{ color: 'red' }}
              className='resume-education-h4'>
              Kent C. Dodds,{' '}
              <span style={{ fontSize: '1.1rem', textTransform: 'capitalize' }}>
                Current
              </span>
            </h4>
          </div>
          <div>
            <h3
              style={{ color: '#555', fontSize: '1.25rem' }}
              className='resume-education-h3'>
              Front-End DEV PATH
            </h3>
            <h4
              style={{ color: 'red' }}
              className='resume-education-h4'>
              Scrimba, <span style={{ fontSize: '1.1rem' }}>2022</span>
            </h4>
          </div>
          <div>
            <h3
              style={{ color: '#555', fontSize: '1.25rem' }}
              className='resume-education-h3'>
              Coding Bootcamp
            </h3>
            <h4
              style={{ color: 'red' }}
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
