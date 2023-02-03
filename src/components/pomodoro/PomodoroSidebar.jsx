import React, { useState } from 'react';
import PomodoroHamburgerIcon from './PomodoroHamburgerIcon';
import '../../css-components/PomodoroApp.css';

function Sidebar({ checked, handleInputClick }) {
  const [isOpen, setOpen] = useState(true);
  console.log(isOpen);

  return (
    <div>
      <PomodoroHamburgerIcon
        isOpen={isOpen}
        setOpen={setOpen}
      />
      <div
        className={
          isOpen ? 'pomodoro-sidebar-open' : 'pomodoro-sidebar-closed'
        }>
        {' '}
        <div className='pomodoro-toggle'>
          <input
            type='checkbox'
            checked={checked}
            onChange={handleInputClick}
          />
          <div className='light'></div>
          <div className='switch'></div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
