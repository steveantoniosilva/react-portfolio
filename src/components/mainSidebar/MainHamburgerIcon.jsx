import { Twirl as Hamburger } from 'hamburger-react';

export default function MainHamburgerIcon({ isOpen, setOpen }) {
  return (
    <div className='main-hamburger'>
      <Hamburger
        color='navajowhite'
        toggled={isOpen}
        toggle={setOpen}
        duration={0.5}
        direction='left'
      />
    </div>
  );
}
