/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect } from 'react-router'
import styled from 'styled-components'

import ScaleLoader from 'react-spinners/ScaleLoader'

const redirectPage = () => {
  return (
    <>
      <Container>
        <FlexRow>
          <Text>대충 로그인 중이라는 내용</Text>
          <ScaleLoader height="160px" width="32px" color="#7362ff" radius="8px" margin="5px" speedMultiplier="2" />
        </FlexRow>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FlexRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Text = styled.div`
  width: 250px;
  height: 50px;
  margin: 0 0 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
  font-weight: 600;
`

export default redirectPage
