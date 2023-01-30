import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import HamburgerIcon from './HamburgerIcon';
import '../css-components/Sidebar.css';
import Nav from './Nav';

export default function Sidbar() {
  const [isOpen, setOpen] = useState();

  const handlleClick = () => {
    setOpen(prevState => !prevState);
  };

  return (
    <>
      <HamburgerIcon
        isOpen={isOpen}
        setOpen={setOpen}
      />
      <div className={isOpen ? 'sidebar-open' : 'sidebar-closed'}>
        <Nav onClick={handlleClick} />
      </div>
      <Outlet />
    </>
  );
}