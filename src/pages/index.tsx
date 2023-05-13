import { type NextPage } from "next";
import Head from "next/head";
import NavBar from "./navbar";
import NoteArea from "./notearea";

const Home: NextPage = () => {


	return (
		<>
			<Head>
				<title>T3Notes</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="flex flex-row items-center h-screen w-screen overflow-hidden">

				<NavBar />
				<NoteArea />
			</main>
		</>
	);
};

export default Home;
