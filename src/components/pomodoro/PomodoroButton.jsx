export default function Button({ isActive, handleIsActiveClick }) {
  return (
    <button
      onClick={handleIsActiveClick}
      className='pomodoro-button'>
      {isActive ? 'Pause' : 'Play'}
    </button>
  );
}
