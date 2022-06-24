/**
 * 
 * This page is the base of the Editor
 * 
 */
 import Head from "next/head";
 import type { NextPage } from "next";
 
 const Home: NextPage = () => {
   return (
     <div>
       <Head>
         <title>Wordy Editor</title>
         <meta name="description" content="Free tet editor and open source" />
         <link rel="icon" href="/favicon.png" />
       </Head>
 
       <main></main>
     </div>
   );
 };
 
 export default Home;
 
