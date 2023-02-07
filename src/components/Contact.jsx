import '../css-components/Contact.css';
import VanillaTilt from 'vanilla-tilt';
import { useRef, useEffect } from 'react';

export default function Contact() {
  const contactCardRef = useRef(null);

  useEffect(() => {
    const tiltNode = contactCardRef.current;
    VanillaTilt.init(tiltNode, {
      max: 22,
      speed: 0.1,
      glare: true,
      'max-glare': 0.5,
      transition: true,
      easing: '1',
      reverse: true,
    });
    return () => tiltNode.vanillaTilt.destroy();
  }, []);

  return (
    <div className='contact-page'>
      <div className='style-background-div1'></div>
      <div className='style-background-div2'></div>
      <div className='tooltip'>
        <div
          ref={contactCardRef}
          className='container'>
          <a href='mailto:steveantoniosilva@gmail.com'>
            <div className='card'>
              <div className='card-content d-flex'>
                <div className='logo'></div>
                <div className='d-flex'>
                  <span className='title'>
                    Steve <span className='antonio'>antonio</span> Silva
                  </span>
                </div>
              </div>
            </div>
            <span className='tooltiptext'>Click Card to Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}
