export default function ResumeFormalEducation() {
  return (
    <div>
      {' '}
      <div
        style={{ backgroundColor: 'rgba(242, 121, 53, .9)' }}
        className='resume-education-page'>
        <div>
          <h1 className='resume-education-h1'>
            <span
              style={{
                fontWeight: '100',
              }}>
              Formal
            </span>{' '}
            Education
          </h1>
          <h2 className='resume-education-h2'>
            <span
              style={{
                fontWeight: 'bold',
              }}>
              Boise State
            </span>{' '}
            University
          </h2>
        </div>
        <div>
          <div className='resume-education-page-img'></div>
        </div>
        <div className='education-container'>
          <div>
            <h3 className='resume-education-h3'>
              M.B.A.{' '}
              <span
                style={{
                  fontWeight: '100',
                }}>
                19'
              </span>
            </h3>
            <h4
              style={{ marginTop: '.4em' }}
              className='resume-education-h4'>
              summa cum laude
            </h4>
          </div>
          <div>
            <h3 className='resume-education-h3'>
              B.A.S.{' '}
              <span
                style={{
                  fontWeight: '100',
                }}>
                17'
              </span>
            </h3>
            <h4
              style={{ marginTop: '.4em' }}
              className='resume-education-h4'>
              magna cum laude
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
