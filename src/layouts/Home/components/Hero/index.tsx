import Link from 'next/link'

import useTranslation from 'next-translate/useTranslation'

import { BsFillPlayFill } from 'react-icons/bs'
import { DiGithubBadge } from 'react-icons/di'

import Heading from 'components/Heading'
import Button from 'components/Button'

import * as S from './styles'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <S.Wrapper>
      <Heading level={1} weight="extrabold" size="5xl">
        {t('home:title')}
      </Heading>

      <Heading level={3} size="xl" weight="regular" color="grey">
        Açaí is a framework that focuses on simplicity and extensebility,
        enabling you to work fast and build amazing application with incredible
        ease.
      </Heading>

      <S.Buttons>
        <Link href="/docs" passHref>
          <Button icon={<BsFillPlayFill />}>Get started</Button>
        </Link>

        <Button
          as="a"
          bg="black"
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          icon={<DiGithubBadge />}
        >
          Github page
        </Button>
      </S.Buttons>
    </S.Wrapper>
  )
}

export default Hero
