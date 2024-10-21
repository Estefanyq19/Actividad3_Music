import React, { useState } from 'react';
import styles from '../styles/Songs.module.css';

const Songs = () => {
  const [currentSong, setCurrentSong] = useState(null);

  const songs = [
    { title: 'Mañana será bonito', artist: 'karol G', image: 'https://res.cloudinary.com/dfo4pp3fq/image/upload/v1729475089/descarga_1_r9ekl4.jpg' },
    { title: 'Cazzualidades', artist: 'Christian Nodal', image: 'https://res.cloudinary.com/dfo4pp3fq/image/upload/v1729475089/descarga_2_r9pwxb.jpg' },
    { title: 'Mi vida eres tú', artist: 'Los temerarios', image: 'https://res.cloudinary.com/dfo4pp3fq/image/upload/v1729475089/descarga_d2tynl.jpg' },
  ];

  const handlePlay = (song) => {
    setCurrentSong(song);
  };

  return (
    <div className={styles.songsContainer}>
      {songs.map((song, index) => (
        <div key={index} className={styles.songItem}>
          <div>
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
          </div>
          <button className={styles.playButton} onClick={() => handlePlay(song)}>
            ▶️ Play
          </button>
        </div>
      ))}

      {currentSong && (
        <div className={styles.nowPlaying}>
          <img src={currentSong.image} alt={currentSong.title} className={styles.albumArt} />
          <div>
            <h3>{currentSong.title}</h3>
            <p>{currentSong.artist}</p>
            <div className={styles.progressBar}>
              <div className={styles.progress}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Songs;
