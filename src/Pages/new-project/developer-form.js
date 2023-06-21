import React from 'react'
import FormDev from '../../Components/form-dev/form-dev'
import styled from 'styled-components'

const Container = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background-image: radial-gradient(circle, #fff, #f77177);
  display: flex;
  flex-direction: column;
  align-items: center;
`
function DeveloperForm() {
  return (
    <Container>
      <FormDev />
    </Container>
  )
}

export default DeveloperForm