import Head from 'next/head'
import Main from '../components/Main'
import NossaHistoria from '../components/NossaHistoria'
import FaleComRepresentante from '../components/FaleComRepresentante'
import Instagram from '../components/Instagram'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Prado Calçados</title>
        <meta name="google-site-verification" content="46Fa5s19YtiOOHmYxjLZey9NfZdBPeMJebHhXmZkzfs" />
        <meta name="description" content="" />
        <meta property='og:title' content='Prado Calçados' />
        <meta
          property='og:description'
          content=''
        />
        <meta property='og:url' content='https://www.pradocalcados.com.br/' />
        <meta property='og:type' content='website' />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Main /> 
      <NossaHistoria/>
      <FaleComRepresentante representante='TEMOS AS MELHORES CONDIÇÕES PARA REVENDEDORES' repmessage='Fale com um' repmessage1='representante'/> 
      <Instagram />
      
       
    </div>
  )
}
