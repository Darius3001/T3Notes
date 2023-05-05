import { type NextPage } from "next";
import { noSSR } from "next/dynamic";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

import { api } from "t3notes/utils/api";

const Home: NextPage = () => {
  const [text] = useState("");

  return (
    <>
      <Head>
        <title>T3Notes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-1 flex-col h-screen">
        <nav>
          
        </nav>
        <div className="flex item-center h-screen ">
          <textarea defaultValue={text} className="
            place-self-center h-5/6 w-1/3 mx-auto text-center p-2
            resize-none border rounded-md
            focus:outline-none focus:border-black transition duration-75 ease-in-out">
          </textarea>
        </div>
      </main>
    </>
  );
};

export default Home;
