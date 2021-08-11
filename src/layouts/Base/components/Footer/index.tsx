import { FaTwitter, FaGithub } from "react-icons/fa"

import Container from "components/Container"

import * as S from "./styles"

const Footer = () => {
	return (
		<S.Wrapper>
			<Container>
				<S.Content>
          Copyright © {new Date().getFullYear()} AçaíJS, Inc. All rights
          reserved.
					<S.ListItems>
						<S.ListItem>
							<a
								href="https://twitter.com/acai_js"
								target="_blank"
								rel="noreferrer"
							>
								<FaTwitter />
							</a>
						</S.ListItem>

						<S.ListItem>
							<a
								href="https://github.com/AcaiJS"
								target="_blank"
								rel="noreferrer"
							>
								<FaGithub />
							</a>
						</S.ListItem>
					</S.ListItems>
				</S.Content>
			</Container>
		</S.Wrapper>
	)
}

export default Footer
