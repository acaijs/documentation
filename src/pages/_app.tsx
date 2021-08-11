import type { AppProps } from "next/app"
import Head from "next/head"

import { DefaultSeo } from "next-seo"
import SEO from "../../next-seo.config"

import BaseLayout from "layouts/Base"

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<title>AçaíJS</title>
				<link rel="icon" type="image/png" href="/favicon.ico" />
				<link rel="shortcut icon" href="/icon/icon-512.png" />
				<link rel="apple-touch-icon" href="/icon/icon-512.png" />
				<link rel="manifest" href="/manifest.json" />
				<meta name="description" content="AçaíJS Framework" />

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;900&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<DefaultSeo {...SEO} />

			<BaseLayout>
				<Component {...pageProps} />
			</BaseLayout>
		</>
	)
}
export default MyApp
