import '../../css-components/Resume.css';
import ResumeCodingEducation from './ResumeCodingEducation';
import ResumeFormalEducation from './ResumeFormalEducation';
import ResumeLandingPage from './ResumeLandingPage';

export default function Resume() {
  return (
    <div>
      <ResumeLandingPage />
      <ResumeFormalEducation />
      <ResumeCodingEducation />
      <div className='awards-page'>
        <div>awards</div>
      </div>
    </div>
  );
}
