import "../styles/globals.css";
import Head from "next/head";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>EthShop</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <main>
        <NavBar />
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
