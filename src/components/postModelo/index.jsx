import styles from "./PostModelo.module.css";
import PropTypes from "prop-types";

export const PostModelo = ({ fotoCapa, titulo, children }) => {
  return (
    <article className={styles.postModeloContainer}>
      <img
        className={styles.fotoCapa}
        style={{
          backgroundImage: `url(${fotoCapa})`,
        }}
        src=""
        alt=""
      />

      <h2 className={styles.titulo}>{titulo}</h2>

      <div className={styles.postConteudoContainer}>{children}</div>
    </article>
  );
};

PostModelo.propTypes = {
  fotoCapa: PropTypes.string,
  titulo: PropTypes.string,
  children: PropTypes.string,
};
