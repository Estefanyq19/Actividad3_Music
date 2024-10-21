import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>BIENVENIDA/O A KODI MUSIC</h1>
      <p className={styles.subtitle}>Explora, escucha y disfruta de tu música favorita.</p>
      <div className={styles.buttons}>
        <Link to="/canciones" className={styles.button}>
          LSITA DE REPRODUCCIÓN
        </Link>
        <Link to="/formulario" className={styles.button}>
          HOLA KODIMUSIC, REGISTRATE!
        </Link>
      </div>
    </div>
  );
};

export default Home;
