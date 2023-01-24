import Image from "next/image";
import Layouts from "../components/layouts";
import styles from "../styles/nosotros.module.css"




export default function Nosotros() {
  return (
    <Layouts title={"Nosotros"} description={"Blog sobre Nosotros, Guitar LA"}>
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
          <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros"/>


          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis deserunt velit doloribus officia, ab minima saepe
              corrupti quas. Suscipit quod eaque ea dolorem beatae architecto ut
              iste doloribus, cumque tempora. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Iste laboriosam officiis rerum
              voluptas delectus. 
              <br /><br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis deserunt velit doloribus officia, ab minima saepe
              corrupti quas. Suscipit quod eaque ea dolorem beatae architecto ut
              iste doloribus, cumque tempora. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Iste laboriosam officiis rerum
              voluptas delectus. 
            </p>
          </div>
        </div>
      </main>
    </Layouts>
  );
}
