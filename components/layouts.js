import Head from "next/head"
import Footer from "./footer"
import Header from "./header"



export default function Layouts({ children, title = '', description = '' }) {
    return (
       <>
       <Head>
                <title>{`Guitar LA - ${title}`}</title>
                <meta name="description" content={description}></meta>
            </Head>
            
            <Header/>
            {children}
            <Footer />      
       </>

    )
}
