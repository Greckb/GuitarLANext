import Link from "next/link"
import Curso from "../components/Curso"
import Guitarra from "../components/guitarra"
import Layouts from "../components/layouts"
import Post from "../components/post"
import styles from "../styles/grid.module.css"





export default function Home({guitarra, post,curso}) {

  return (
    <>
      <Layouts
        title={'Inicio'}
        description={'Blog de Musica, venta de guitarras y mas'}
      >
        <main className="contenedor">
        <h1 className="heading">Nuestra Coleccion</h1>
        <div className={styles.grid}>
          {guitarra?.map((guitarra) => (
            <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
          ))}
        </div>
        </main>

        <Curso 
          curso={curso.attributes}
        />

      <section className="contenedor">
            <h2 className="heading">Blog</h2>
            <div className={styles.grid}>
          {post?.map(post =>(
            <Post
              key={post.id}
              post={post.attributes}
            />
          ))}
        </div>
      </section>

      </Layouts>
    </>
  )
}
export async function getStaticProps() {
  const urlGuitarra = `${process.env.API_URL}/guitarras?populate=imagen`
  const urlPost = `${process.env.API_URL}/posts?populate=imagen`
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`

  const [resGuitarra, resPost, resCurso] = await Promise.all([
    fetch(urlGuitarra),
    fetch(urlPost),
    fetch(urlCurso),
  ])

  const [{ data: guitarra }, { data: post }, {data: curso}] = await Promise.all([
    resGuitarra.json(),
    resPost.json(),
    resCurso.json()
  ])

  return {
    props: {
      guitarra,
      post,
      curso
    }
  }
}
