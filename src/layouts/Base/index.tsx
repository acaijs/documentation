import { ThemeProvider } from "styled-components"

import GlobalStyles from "styles/global"
import theme from "styles/theme"

import Footer from "./components/Footer"
import Header from "./components/Header"

import * as S from "./styles"

type BaseLayoutProps = {
  children?: React.ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
	return (
		<>
			<GlobalStyles />

			<ThemeProvider theme={theme}>
				<Header />

				<S.Wrapper>{children}</S.Wrapper>

				<Footer />
			</ThemeProvider>
		</>
	)
}

export default BaseLayout
