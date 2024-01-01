import styles from "./Rodape.module.css"
import marcaRegistrada from "@/assets/marca_registrada.svg"

export const Rodape = () => {
  return (
    <footer className={styles.rodape}>
      <img src={marcaRegistrada} alt="" />
    </footer>
  )
}