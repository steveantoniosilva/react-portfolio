export default function ResumeCodingEducation() {
  return (
    <div>
      {' '}
      <div
        style={{ backgroundColor: 'white' }}
        className='resume-education-page'>
        <div>
          <h1
            style={{ color: '#333' }}
            className='resume-education-h1'>
            Coding{' '}
            <span
              style={{
                fontWeight: '100',
              }}>
              Education
            </span>
          </h1>
          <h2
            style={{ color: '#333' }}
            className='resume-education-h2'>
            Boot Camp /{' '}
            <span
              style={{
                fontWeight: 'bold',
              }}>
              Self-Taught
            </span>
          </h2>
        </div>
        <div>
          <div className='resume-education-coding-page-img'></div>
        </div>
        <div className='coding-education-container'>
          <div>
            <h3
              style={{ color: '#333', fontSize: '1.25rem' }}
              className='resume-education-h3'>
              Epic React
            </h3>
            <h4
              style={{ color: '#333' }}
              className='resume-education-h4'>
              Current
            </h4>
          </div>
          <div>
            <h3
              style={{ color: '#333', fontSize: '1.25rem' }}
              className='resume-education-h3'>
              Front-End Dev Path
            </h3>
            <h4
              style={{ color: '#333' }}
              className='resume-education-h4'>
              Scrimba, 2022
            </h4>
          </div>
          <div>
            <h3
              style={{ color: '#333', fontSize: '1.25rem' }}
              className='resume-education-h3'>
              Coding Bootcamp
            </h3>
            <h4
              style={{ color: '#333' }}
              className='resume-education-h4'>
              Tech Talent South, 2021
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
