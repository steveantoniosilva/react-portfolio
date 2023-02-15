import { useEffect, useRef, useState } from 'react';
import '../css-components/MusicApp.css';
import data from '../data';
function MusicApp() {
  const sound = useRef(null);
  const [count, setCount] = useState(0);
  const [songs, setSongs] = useState(data);
  const [autoPlay, setAutoPlay] = useState(false);
  const [progressBar, setProgressBar] = useState(0);
  console.dir(sound.current);

  const play = () => {
    sound.current.play();
    if (!autoPlay) {
      setAutoPlay(true);
    }
    if (progressBar <= 0.001) {
      setProgressBar(0.001);
    }
  };

  const pause = () => {
    sound.current.pause();
  };

  const forward = () => {
    count < data.length - 1
      ? setCount(prevCount => prevCount + 1)
      : setCount(0);
    if (!autoPlay) {
      setAutoPlay(true);
    }
    setProgressBar(0);
  };

  const backward = () => {
    count > 0
      ? setCount(prevCount => prevCount - 1)
      : setCount(data.length - 1);
    if (!autoPlay) {
      setAutoPlay(true);
    }
    setProgressBar(0.001);
  };

  useEffect(() => {
    const duration = Math.floor(sound.current.duration);
    const currentTimeStamp = sound.current.currentTime;

    const interval = setInterval(() => {
      setProgressBar((currentTimeStamp / duration) * 100);
    }, 250);
    return () => {
      clearInterval(interval);
    };
  }, [progressBar]);

  useEffect(() => {
    setSongs({
      title: data[count].title,
      albumCover: data[count].albumCover,
      artist: data[count].artist,
      song: data[count].track,
    });
  }, [count]);

  return (
    <div className='musicApp'>
      <div className='overlay'>
        <div className='progressBar'>
          <div
            style={{ width: `${progressBar}%`, transition: '.25s' }}
            className='progress'></div>
        </div>
        <div className='group1'>
          <div
            onClick={play}
            className='musicAppButton'>
            <i className='fa-solid fa-play'></i>
          </div>
          <div
            onClick={pause}
            className='musicAppButton'>
            <i className='fa-solid fa-pause'></i>
          </div>
        </div>
        <div>
          <h2 className='songTitle'>{songs.title}</h2>
          <div className='albumCover'>
            <audio
              onEnded={() => forward()}
              autoPlay={autoPlay}
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
            className='musicAppButton'>
            <i className='fa-solid fa-backward'></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicApp;
