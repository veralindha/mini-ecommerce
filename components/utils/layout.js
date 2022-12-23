import Head from "next/head"
import Features from "./features"
import Navbar from "./navbar"
import Header from "./header"
import Footer from "./footer"
import Quotes from "./quotes"

export default function Layout(){
    return(
        <>
        <Head>
        <title></title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Header/>
      <Quotes/>
      <Features/>
      <Footer/>
      </>
    )
}