import { Squash as Hamburger } from 'hamburger-react';

export default function HamburgerIcon({ isOpen, setOpen }) {
  return (
    <div className='pomodoro-hamburger'>
      <Hamburger
        color='tomato'
        toggled={isOpen}
        toggle={setOpen}
        duration={0.5}
        direction='right'
      />
    </div>
  );
}