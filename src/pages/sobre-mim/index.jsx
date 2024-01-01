import { PostModelo } from "../../components/postModelo";
import fotoCapa from "@/assets/sobre_mim_capa.png"
import fotoSobreMim from "@/assets/minha_foto_andre.jpg"
import styles from "./SobreMin.module.css"

export const Sobremin = () => {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">

      <h3 className={styles.subtitulo}> Olá eu sou o André</h3>
      <img src={fotoSobreMim} className={styles.fotoSobreMim} />
      <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou Aluno na Alura e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou bem cedo desde pequeno já sabia que queria ser um programador, Eu aprendi lógica de programação e o básico de várias linguagens, como Python, Java, mas sem aprofundar muito em cada uma delas.
            </p>
            <p className={styles.paragrafo}>
               Entrei na escola Proz e lá aprendi muito também, fiz varios exercicios e trabalhos para fortalecer o raciocínio lógico para me tornar um programador melhor do que eu era no dia anterior
            </p>
            <p className={styles.paragrafo}>
                Com isso tive minha experiência de dev mais próxima da realidade, com prazos de implementação para o site, e aprendi muito enquanto codificava.
            </p>
            <p className={styles.paragrafo}>
                Ainda estou a procura da minha primeira oportunidade de Estágio ou de Júnior para poder mostrar ao mercado do que eu sou capaz.
            </p>
            <p className={styles.paragrafo}>
                Desde então, tem sido aprenas aprendizados atrás de aprendizados. A Alura é uma escola não só para seus alunos e alunas, mas também para os colaboradores e colaboradoras. Hoje sou muito feliz de ter a oportunidade de poder fazer cursos na plataforma que é referencia. :)
            </p>
      
    </PostModelo>
  );
};
