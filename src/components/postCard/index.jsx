import styles from "./Post.module.css";
import PropTypes from "prop-types";
/**
 * !Esses imports só estao ai pq estavam dando problema, o vite não estava enviando as imagens pro navegador
 * !por isso foi feito assim mais no curso era pra utilizar :
 *
 * ? src:{`@/assets/posts/${post.id}/capa.png`}
 * * Dai todas as imagens iriam sem precisar desse tanto de import
 */
import fotoCapa1 from "@/assets/posts/1/capa.png";
import fotoCapa2 from "@/assets/posts/2/capa.png";
import fotoCapa3 from "@/assets/posts/3/capa.png";
import fotoCapa4 from "@/assets/posts/4/capa.png";
import fotoCapa5 from "@/assets/posts/5/capa.png";
import fotoCapa6 from "@/assets/posts/6/capa.png";
import fotoCapa7 from "@/assets/posts/7/capa.png";
import fotoCapa8 from "@/assets/posts/8/capa.png";
import { Link } from "react-router-dom";
import { BotaoPrincipal } from "../botaoPrincipal";

export const PostCard = ({ post }) => {
  const capas = [
    fotoCapa1,
    fotoCapa2,
    fotoCapa3,
    fotoCapa4,
    fotoCapa5,
    fotoCapa6,
    fotoCapa7,
    fotoCapa8,
  ];

  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img className={styles.capa} src={capas[post.id - 1]} alt="" />
        <h2 className={styles.titulo}>{post.titulo}</h2>
        <BotaoPrincipal>Ler</BotaoPrincipal>
      </div>
    </Link>
  );
};

PostCard.propTypes = {
  post: PropTypes.object,
};
