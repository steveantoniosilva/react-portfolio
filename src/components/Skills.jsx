import '../css-components/Skills.css';
import vsIcon from '../assets/vsIcon.png';
import figmaIcon from '../assets/Figma-Icon.svg';
import mongodbIcon from '../assets/mongodb.png';
import expressIcon from '../assets/expressIcon.png';
import router from '../assets/router.svg';

export default function Skills() {
  return (
    <div className='skills-page'>
      <div className='skills-container'>
        <div className='skills-inner-container'>
          {' '}
          <div className='skills'>
            <i className='fa-brands fa-react skills-react'></i>
            <p>react</p>
          </div>
          <div className='skills'>
            <i className='fa-brands fa-square-js skills-javascript'></i>
            <p>Javascript</p>
          </div>
        </div>
        <div className='skills-inner-container'>
          <div className='skills'>
            <img
              src={router}
              alt='router-icon'
              className='router-icon'
            />
            <p>react router</p>
          </div>
          <div className='skills'>
            <i className='fa-brands fa-bootstrap skills-bootstrap'></i>
            <p>bootstrap</p>
          </div>
        </div>
      </div>

      <div className='skills-container'>
        <div className='skills-inner-container'>
          <div className='skills'>
            <i className='fa-brands fa-css3-alt skills-css'></i>
            <p>CSS 3</p>
          </div>
          <div className='skills'>
            <i className='fa-brands fa-html5 skills-html'></i> <p>html 5</p>
          </div>
        </div>
        <div className='skills-inner-container'>
          {' '}
          <div className='skills'>
            <i class='fa-brands fa-git-alt skills-git'></i>
            <p>git</p>
          </div>
          <div className='skills'>
            <img
              className='figma-icon'
              src={figmaIcon}
              alt='figma-logo'
            />{' '}
            <p>figma</p>
          </div>
        </div>
      </div>

      <div className='skills-container'>
        <div className='skills-inner-container'>
          {' '}
          <div className='skills'>
            <img
              className='vs-icon'
              src={vsIcon}
              alt='vs-code-logo'
            />
            <p>vs code</p>
          </div>
          <div className='skills'>
            <i className='fa-solid fa-terminal skills-bootstrap'></i>
            <p>Command Line</p>
          </div>
        </div>
        <div className='skills-inner-container'>
          <div className='skills'>
            <i className='fa-brands fa-npm skills-npm'></i>
            <p>npm</p>
          </div>
          <div className='skills'>
            <i className='fa-brands fa-github skills-github'></i>
            <p>placeholder</p>
          </div>
        </div>
      </div>

      {/* LEARNING SECTION */}

      <h3 className='skills-h3'>
        currently<span className='hand'>👇</span>learning:
      </h3>

      <div className='skills-container'>
        <div className='skills-inner-container'>
          {' '}
          <div className='skills'>
            <i class='fa-brands fa-node skills-node'></i>
            <p>node js</p>
          </div>
          <div className='skills'>
            <img
              className='mongo-icon'
              src={mongodbIcon}
              alt='mongo-icon'
            />
            <p>Mongo DB</p>
          </div>
        </div>
        <div className='skills-inner-container'>
          <div className='skills'>
            <img
              className='express-icon'
              src={expressIcon}
              alt='express-logo'
            />
            <p>Express js</p>
          </div>
          <div className='skills'>
            <i className='fa-brands fa-bootstrap skills-bootstrap'></i>
            <p>placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
}
