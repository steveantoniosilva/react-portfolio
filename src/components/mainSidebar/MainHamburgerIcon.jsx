import Hamburger from 'hamburger-react';

export default function MainHamburgerIcon({ isOpen, setOpen }) {
  return (
    <div className='main-hamburger'>
      <Hamburger
        color='ivory'
        toggled={isOpen}
        toggle={setOpen}
        duration={0.8}
        direction='left'
      />
    </div>
  );
}
