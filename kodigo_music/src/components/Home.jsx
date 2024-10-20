import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css"; // Los estilos para la página de inicio

const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenido a Kodigo Music</h1>
      <p className={styles.subtitle}>Explora, escucha y disfruta de tu música favorita.</p>
      <div className={styles.buttons}>
        <Link to="/canciones" className={styles.button}>
          Canciones
        </Link>
        <Link to="/formulario" className={styles.button}>
          Contacto
        </Link>
      </div>
    </div>
  );
};

export default Home;
