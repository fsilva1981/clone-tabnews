import styles from "./index.module.css"; // Vamos criar este arquivo
import { IoBarChartSharp } from "react-icons/io5"; // Você acabou de instalar!

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.contentBox}>
        {/* Ícone que remete a BI e Dados */}
        <IoBarChartSharp className={styles.icon} />

        <h1 className={styles.headline}>
          A sua torre de controle de dados está quase pronta.
        </h1>

        <p className={styles.text}>
          Estamos unindo Business Intelligence e Engenharia de Dados para
          construir uma ferramenta revolucionária. Prepare-se para orientar sua
          organização com <strong>decisões em tempo real</strong>, baseadas nos
          indicadores de performance que realmente importam.
        </p>

        <p className={styles.highlight}>
          Trazendo resultados excelentes não só para o seu negócio, mas para a
          sua equipe – a peça mais importante de qualquer empresa.
        </p>

        <h2 className={styles.soon}>EM BREVE</h2>
      </div>
    </main>
  );
}
