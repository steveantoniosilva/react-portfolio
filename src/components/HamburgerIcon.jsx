import Hamburger from 'hamburger-react';

export default function HamburgerIcon({ isOpen, setOpen }) {
  return (
    <div className='hamburger'>
      <Hamburger
        color='gray'
        toggled={isOpen}
        toggle={setOpen}
        duration={.8}
        direction='left'
      />
    </div>
  );
}
