import Link from "next/link"

import Container from "components/Container"
import Logo from "components/Logo"

import SearchBar from "../SearchBar"

import * as S from "./styles"

const Header = () => {
	return (
		<S.Wrapper>
			<Container>
				<S.Nav>
					<S.Brand>
						<Link href="/" passHref>
							<a aria-label="AçaiJS, Back to homepage">
								<Logo />
							</a>
						</Link>
					</S.Brand>

					<SearchBar placeholder="Search doc" />

					<S.Links>
						<Link href="/docs">Docs</Link>

						<Link href="/blog">Blog</Link>

						<Link href="/examples">Examples</Link>

						<a
							href="https://github.com/AcaiJS/modules"
							target="_blank"
							rel="noopener noreferrer"
						>
              Github
						</a>
					</S.Links>
				</S.Nav>
			</Container>
		</S.Wrapper>
	)
}

export default Header
