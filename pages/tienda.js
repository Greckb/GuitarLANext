import Layouts from "../components/layouts";
import Guitarra from "../components/guitarra";
import styles from "../styles/grid.module.css"

export default function Tienda({ guitarras }) {
  console.log(guitarras);
  return (
    <Layouts title={"Tienda"} description={"Tienda de guitarras, Guitar LA"}>
      <main className="contenedor">
        <h1 className="heading">Nuestra coleccion</h1>

        <div className={styles.grid}>
          {guitarras?.map((guitarra) => (
            <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
          ))}
        </div>
      </main>
    </Layouts>
  );
}

// export async function getStaticProps(){
//   const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
//   const {data: guitarras} = await respuesta.json()

//   return {
//     props: {
//       guitarras
//     }
//   }
// }

export async function getServerSideProps() {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`
  );
  const { data: guitarras } = await respuesta.json();

  return {
    props: {
      guitarras,
    },
  };
}
