import '../../css-components/PomodoroApp.css';

function Sidebar({ checked, handleInputClick }) {
  return (
    <div className='pomodoro-toggle'>
      <div style={{backgroundColor: 'white'}}>
          <input
            type='checkbox'
            checked={checked}
            onChange={handleInputClick}
          />
      </div>
    </div>
  );
}

export default Sidebar;
