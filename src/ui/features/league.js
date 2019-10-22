import React from 'react'
import {
  Section,
  Hero,
  HeroBody,
  Title,
  SubTitle,
  Content,
} from '@brightleaf/elements'
export default () => {
  return (
    <>
      <Section>
        <Hero>
          <HeroBody>
            <Title>Fantasy Pickem</Title>
            <SubTitle>League</SubTitle>
          </HeroBody>
        </Hero>
      </Section>
      <Section>
        <Content>League page</Content>
      </Section>
    </>
  )
}
