import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import NavBar from "./navbar";

const Home: NextPage = () => {


	return (
		<>
			<Head>
				<title>T3Notes</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="flex flex-row items-center h-screen w-screen overflow-hidden">

				<NavBar />
				<div className="flex-grow h-screen">
					{/* <textarea defaultValue={text} className="
            place-self-center h-5/6 w-1/3 mx-auto text-center p-2
            resize-none border rounded-md
            focus:outline-none focus:border-black transition duration-75 ease-in-out">
          </textarea> */}
				</div>
			</main>
		</>
	);
};

export default Home;
