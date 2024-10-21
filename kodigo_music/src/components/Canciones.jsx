import React, { useState } from "react";
import styles from "../styles/Canciones.module.css";
import Song from '../components/Songs';

const Album = () => {
  const songs = [
    { title: "Mi vida eres tú", artist: "Los temerarios", genero: "Regional mexicana", time: "40:26"},
    { title: "Mañana será bonito", artist: "Karol G", genero: "Pop urbano latino", time: "52:44"},
    { title: "Forajido EP2", artist: "Christian Nodal", genero: "Regional mexicana", time: "21:00"},
  ];

  const [currentSong, setCurrentSong] = useState(null); 
  const handlePlay = (song) => {
    setCurrentSong(song); 
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Tu Biblioteca</h2>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Título</th>
            <th>Artista</th>
            <th>Género</th>
            <th>Duración</th>
            <th>Reproducir</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.genero}</td>
              <td>{song.time}</td>
              <td>
                <button onClick={() => handlePlay(song)} className={styles.playButton}>
                  ▶️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mostramos el componente Song cuando hay una canción seleccionada */}
      {currentSong && (
        <div className={styles.songContainer}>
          <Song 
            title={currentSong.title}
            artist={currentSong.artist}
            genero={currentSong.genero}
          />
        </div>
      )}
    </div>
  );
};

export default Album;
