import Link from "next/link"
import Layouts from "../components/layouts"




export default function Pagina404() {
  return (
    <Layouts
        title={'Paguina no encontrada'}
    >
      <p className="error">Pagina no Encontrada </p>
      <Link href="/" legacyBehavior> 
        <a className="error-enlace"> Ir a Inicio </a>
      </Link>
    </Layouts>
  )
}
