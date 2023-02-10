import '../../css-components/Resume.css';
import ResumeAwards from './ResumeAwards';
import ResumeCodingEducation from './ResumeCodingEducation';
import ResumeFormalEducation from './ResumeFormalEducation';
import ResumeLandingPage from './ResumeLandingPage';
import ResumeWork from './ResumeWork';

export default function Resume() {
  return (
    <>
      <ResumeLandingPage />
      <ResumeFormalEducation />
      <ResumeCodingEducation />
      <ResumeAwards />
      <ResumeWork />
    </>
  );
}
