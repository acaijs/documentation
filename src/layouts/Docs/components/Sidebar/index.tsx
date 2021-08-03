import Link from 'next/link'

import Collapse from 'components/Collapse'

import * as S from './styles'

const Sidebar = () => {
  const items = ['Get started']

  return (
    <S.Wrapper>
      <S.ListItem>
        {items.map((item) => (
          <S.Item key={item}>
            <Collapse title={item}>
              <S.ListItem>
                <S.Item>
                  <Link href="introduction" passHref>
                    <S.ItemLink>Introduction</S.ItemLink>
                  </Link>
                </S.Item>

                <S.Item>
                  <Link href="download" passHref>
                    <S.ItemLink>Download</S.ItemLink>
                  </Link>
                </S.Item>

                <S.Item>
                  <Link href="contents" passHref>
                    <S.ItemLink>Contents</S.ItemLink>
                  </Link>
                </S.Item>

                <S.Item>
                  <Link href="javascript" passHref>
                    <S.ItemLink>JavaScript</S.ItemLink>
                  </Link>
                </S.Item>
              </S.ListItem>
            </Collapse>
          </S.Item>
        ))}
      </S.ListItem>
    </S.Wrapper>
  )
}

export default Sidebar
