import '../../css-components/Resume.css';
import ResumeAwards from './ResumeAwards';
import ResumeCodingEducation from './ResumeCodingEducation';
import ResumeFormalEducation from './ResumeFormalEducation';
import ResumeLandingPage from './ResumeLandingPage';

export default function Resume() {
  return (
    <>
      <ResumeLandingPage />
      <ResumeCodingEducation />
      <ResumeFormalEducation />
      <ResumeAwards />
    </>
  );
}
