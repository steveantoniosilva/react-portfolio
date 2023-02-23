import { Twirl as Hamburger } from 'hamburger-react';

export default function MainHamburgerIcon({ isOpen, setOpen }) {
  return (
    <div className='main-hamburger'>
      <Hamburger
        color='tan'
        toggled={isOpen}
        toggle={setOpen}
        duration={0.25}
        direction='left'
      />
    </div>
  );
}
