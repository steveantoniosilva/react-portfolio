import Hamburger from 'hamburger-react';

export default function HamburgerIcon({ isOpen, setOpen }) {
  return (
    <div className='hamburger'>
      <Hamburger
        color='oldlace'
        toggled={isOpen}
        toggle={setOpen}
        duration={0.8}
        direction='left'
      />
    </div>
  );
}
