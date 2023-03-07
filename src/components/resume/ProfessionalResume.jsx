import professionalResume from '../../assets/resume.png';
import resumePDF from '../../assets/resume.pdf';

export default function ProfessionalResume() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='professional-resume-container'>
      <button
        onClick={handleDownload}
        className='download-cv-btn'>
        Download PDF
      </button>
      <img
        className='professional-resume'
        src={professionalResume}
        alt='resume'
      />
    </div>
  );
}
