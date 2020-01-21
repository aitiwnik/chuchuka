import React from 'react'
import { Text, Wrapper, WrapperItems, Item } from './styles'

export const Initial = () => {
  return (
    <div>
      <Text block>Hello, John</Text>
      <Text block>Please select the topic you need help with</Text>
      <Text block>Before we call you, we need a bit more</Text>
      <Text block>information about how we can help.</Text>

      <WrapperItems>
        <Item>
          <Text block>
            I need help with my <Text link="/contactUs/login">debit card</Text>
          </Text>
        </Item>
        <Item>
          <Text block>
            I need help with my{' '}
            <Text link="/contactUs/login">deposit account</Text>
          </Text>
        </Item>
        <Item>
          <Text block>
            I need help with my{' '}
            <Text link="/contactUs/login">profile or preferences</Text>
          </Text>
        </Item>
      </WrapperItems>

      <Wrapper margin="2rem">
        <Wrapper margin="1rem">
          <Text block>
            Explore our FAQs <Text link="/contactUs/login">here</Text>
          </Text>
        </Wrapper>

        <Wrapper margin="1rem">
          <Text block>
            Have a different question? Submit a form{' '}
            <Text link="/contactUs/login">here</Text>
          </Text>
        </Wrapper>
      </Wrapper>
    </div>
  )
}
