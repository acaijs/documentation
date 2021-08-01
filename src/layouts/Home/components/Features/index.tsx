import { ImMagicWand } from 'react-icons/im'
import { MdViewModule } from 'react-icons/md'
import { IoSpeedometerOutline } from 'react-icons/io5'

import Heading from 'components/Heading'

import FeaturesCard from '../FeaturesCard'

import * as S from './styles'

const Features = () => {
  return (
    <S.Wrapper>
      <Heading size="xl">Features</Heading>

      <Heading level={3} color="primary">
        Why use AçaíJS?
      </Heading>

      <S.List>
        <FeaturesCard title="Simple" icon={<ImMagicWand />}>
          With a small learning curve and using only the best of each
          architecture, AçaíJS was made to be easy to understand, extend and
          deliver.
        </FeaturesCard>

        <FeaturesCard title="Modular" icon={<MdViewModule />}>
          Have an idea to use something that fits your need better than the
          default modules? It`s easy to build your entire application from
          scratch as building modules.
        </FeaturesCard>

        <FeaturesCard title="Fast" icon={<IoSpeedometerOutline />}>
          Build your applications fast, deliver them faster, and see them
          running even faster.
        </FeaturesCard>
      </S.List>
    </S.Wrapper>
  )
}

export default Features
