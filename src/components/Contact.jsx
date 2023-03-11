import '../css-components/Contact.css';
import VanillaTilt from 'vanilla-tilt';
import { useRef, useEffect } from 'react';

export default function Contact() {
  const contactCardRef = useRef(null);

  useEffect(() => {
    const tiltNode = contactCardRef.current;
    VanillaTilt.init(tiltNode, {
      max: 15,
      speed: 0.1,
      transition: true,
      easing: '1',
      reverse: true,
    });
    return () => tiltNode.vanillaTilt.destroy();
  }, []);

  return (
    <div className='contact-page'>
      <div className='tooltip'>
        <div
          ref={contactCardRef}
          className='container'>
          <a href='mailto:steveantoniosilva@gmail.com'>
            <div className='card'>
              <span className='tooltiptext'>
                Click Card <span className='hand'>👇</span> to Email
              </span>
              <div>
                <h1>Steve Antonio Silva</h1>
              </div>
              <div>
                <p>React Engineer</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
