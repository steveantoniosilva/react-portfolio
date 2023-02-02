import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import MainHamburgerIcon from './MainHamburgerIcon';
import '../../css-components/MainSidebar.css';
import Nav from './Nav';

export default function Sidbar() {
  const [isOpen, setOpen] = useState();

  const handlleClick = () => {
    setOpen(prevState => !prevState);
  };

  return (
    <>
      <MainHamburgerIcon
        isOpen={isOpen}
        setOpen={setOpen}
      />
      <div className={isOpen ? 'main-sidebar-open' : 'main-sidebar-closed'}>
        <Nav onClick={handlleClick} />
      </div>
      <Outlet />
    </>
  );
}
