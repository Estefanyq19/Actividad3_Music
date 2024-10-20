import React from "react";
import styles from "../styles/Canciones.module.css"; // Para los estilos

const Canciones = () => {
  const songs = [
    { title: "November Rain", artist: "Guns N' Roses", album: "Greatest Hits", time: "8:57" },
    { title: "La Muralla Verde", artist: "Los Enanitos Verdes", album: "Contrareloj", time: "2:41" },
    { title: "Lamento Boliviano", artist: "Los Enanitos Verdes", album: "Big Bang", time: "3:42" },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Tus Canciones</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Título</th>
            <th>Artista</th>
            <th>Álbum</th>
            <th>Duración</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{song.title}</td>
              <td>{song.artist}</td>
              <td>{song.album}</td>
              <td>{song.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Canciones;
