import "@/styles/globals.css";
import { Rubik } from "@next/font/google";
import type { AppProps } from "next/app";

const rubik = Rubik({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={rubik.className}>
			<Component {...pageProps} />
		</div>
	);
}
