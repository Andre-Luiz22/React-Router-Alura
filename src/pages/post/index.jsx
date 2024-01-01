import { Route, Routes, useParams } from "react-router-dom";
import { PostCard } from "@/components/postCard";
import posts from "@/json/posts.json";
import { PostModelo } from "@/components/postModelo";
import ReactMarkDown from "react-markdown";
import "./Post.css";
import styles from "./Post.module.css";

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
import { NaoEncontrada } from "../nãoEncontrada";
import { PaginaPadrao } from "../../components/paginaPadrao";

export const Post = () => {
  const parametros = useParams();
  const post = posts.find((post) => post.id === Number(parametros.id));
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

  if (!post) {
    return <NaoEncontrada />;
  }

  const postRecomendados = posts
    .filter((post) => post.id !== Number(parametros.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  console.log(postRecomendados);

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route
          index
          element={
            <PostModelo fotoCapa={capas[post.id]} titulo={post.titulo}>
              <div className="post-markdown-container">
                <ReactMarkDown>{post.texto}</ReactMarkDown>
              </div>
              <h2 className={styles.tituloOutrosPosts}>
                Outros osts que você pode gostar:
              </h2>

              <ul className={styles.postsRecomendados}>
                {postRecomendados.map((post) => (
                  <li key={post.id}>
                    <PostCard post={post}></PostCard>
                  </li>
                ))}
              </ul>
            </PostModelo>
          }
        />
      </Route>
    </Routes>
  );
};
