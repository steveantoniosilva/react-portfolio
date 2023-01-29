import Hamburger from 'hamburger-react';

export default function HamburgerIcon({ isOpen, setOpen }) {
  return (
    <div className='hamburger'>
      <Hamburger
        color='gray'
        toggled={isOpen}
        toggle={setOpen}
        duration={0.7}
        direction='left'
      />
    </div>
  );
}
