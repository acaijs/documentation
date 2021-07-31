import Container from 'components/Container'

import Features from './components/Features'
import Hero from './components/Hero'

const HomeLayout = () => {
  return (
    <Container>
      <Hero />

      <hr />

      <Features />
    </Container>
  )
}

export default HomeLayout
