import '../../css-components/Resume.css';
import ResumeCodingEducation from './ResumeCodingEducation';
import ResumeFormalEducation from './ResumeFormalEducation';
import ResumeLandingPage from './ResumeLandingPage';
import ResumeWork from './ResumeWork';
import ResumePDF from './ResumePDF';

export default function Resume() {
  return (
    <>
      <ResumeLandingPage />
      <ResumeFormalEducation />
      <ResumeCodingEducation />
      <ResumeWork />
      <ResumePDF />
    </>
  );
}
