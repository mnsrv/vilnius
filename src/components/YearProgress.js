import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  background-color: white;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
`
const Progress = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: ${props => props.progress}%;
  background-color: black;
  overflow: hidden;
`
const Block = styled.div`
  box-sizing: border-box;
  white-space: normal;
  display: inline-block;
  text-align: center;
  width: ${props => props.progress || 10}%;
  padding: 4px 0;
  position: relative;
  background-color: ${props => props.inverse ? 'black' : 'white'};
  color: ${props => props.inverse ? 'white' : 'black'};
  border-right-color: #dbdbdb;
  border-right-style: solid;
  border-right-width: ${props => props.noBorder ? 0 : 1}px;

  @media (max-width: 649px) {
    display: none;
  }
`
const MobileText = styled.div`
  color: ${props => props.inverse ? 'white' : 'black'};
  padding: 4px 1rem;

  @media (min-width: 650px) {
    display: none;
  }
`
const Wrapper = styled.div`
  white-space: nowrap;
`
const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const text = 'ВРЕМЯ ИДЁТ'

export default () => {
  const date = new Date()
  const year = date.getFullYear()
  const firstDayInMS = (new Date(year, 0, 1)).getTime()
  const lastDayInMS = (new Date(year + 1, 0, 1)).getTime()
  const nowInMS = date.getTime()
  const progress = Math.floor((nowInMS - firstDayInMS) / (lastDayInMS - firstDayInMS) * 100)

  return (
    <Container title={`${progress}%`}>
      <Wrapper>
        {items.map((item, index) => <Block key={item} noBorder={index === items.length - 1}>{text}</Block>)}
      </Wrapper>
      <MobileText>{progress}%</MobileText>
      <Progress progress={progress}>
        <MobileText inverse>{progress}%</MobileText>
        <Wrapper>
          {items.map((item, index) => <Block key={item} noBorder={index === items.length - 1} inverse progress={10 * 100 / progress}>{text}</Block>)}
        </Wrapper>
      </Progress>
    </Container>
  )
}