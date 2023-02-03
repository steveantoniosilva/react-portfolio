import '../css-components/Contact.css';
import VanillaTilt from 'vanilla-tilt';
import { useRef, useEffect } from 'react';

export default function Contact() {
  const contactCardRef = useRef(null);

  useEffect(() => {
    const tiltNode = contactCardRef.current;
    VanillaTilt.init(tiltNode, {
      max: 5,
      speed: 100,
      glare: true,
      'max-glare': 0.75,
    });
    return () => tiltNode.vanillaTilt.destroy();
  }, []);

  return (
    <div className='contact'>
      <p>click card to email:</p>
      <div
        ref={contactCardRef}
        className='container flex-column d-flex'>
        <a href='mailto:steveantoniosilva@gmail.com'>
          <div className='card'>
            <div className='card-content flex-row d-flex'>
              <div className='logo'></div>
              <div className='d-flex flex-column'>
                <span className='title'>Steve Antonio Silva</span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
