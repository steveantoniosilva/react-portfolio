import { useEffect, useRef, useState } from 'react';
import '../css-components/MusicApp.css';
import data from '../data';
function MusicApp() {
  const sound = useRef(null);
  const [count, setCount] = useState(0);
  const [songs, setSongs] = useState(data);
  const [running, setRunning] = useState(false);
  const [progressBar, setProgressBar] = useState(0);

  const play = () => {
    sound.current.play();
    setRunning(true);
    setProgressBar(0.001);
  };

  const pause = () => {
    sound.current.pause();
    setRunning(false);
  };

  const forward = () => {
    count < data.length - 1
      ? setCount(prevCount => prevCount + 1)
      : setCount(0);
  };

  const backward = () => {
    count > 0
      ? setCount(prevCount => prevCount - 1)
      : setCount(data.length - 1);
  };

  useEffect(() => {
    const duration = Math.floor(sound.current.duration);
    const currentTimeStamp = sound.current.currentTime;
    if (running) {
      const interval = setInterval(() => {
        setProgressBar((currentTimeStamp / duration) * 100);
      }, 500);
      return () => {
        clearInterval(interval);
      };
    }
  }, [progressBar, running]);

  useEffect(() => {
    setSongs({
      title: data[count].title,
      albumCover: data[count].albumCover,
      artist: data[count].artist,
      song: data[count].track,
    });
    play();
  }, [count]);

  return (
    <div className='musicApp'>
      <div className='overlay'>
        <div className='progressBar'>
          <div
            style={{ width: `${progressBar}%`, transition: '1s' }}
            className='progress'></div>
        </div>
        <div className='musicAppButtons'>
          <div className='group1'>
            <div
              onClick={play}
              className='musicAppButton'>
              <i className='fa-solid fa-play'></i>
            </div>
            <div
              onClick={pause}
              className='musicAppButton pause'>
              <i className='fa-solid fa-pause'></i>
            </div>
          </div>
          <div>
            <h2 className='songTitle'>{songs.title}</h2>
            <div className='albumCover'>
              <audio
                autoPlay
                ref={sound}
                src={songs.song}></audio>
              <img
                src={songs.albumCover}
                alt=''
              />
            </div>
            <h2 className='artist'> {songs.artist}</h2>
          </div>
          <div className='group2'>
            <div
              onClick={forward}
              className='musicAppButton'>
              <i className='fa-solid fa-forward'></i>
            </div>
            <div
              onClick={backward}
              className='musicAppButton backward'>
              <i className='fa-solid fa-backward'></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicApp;
