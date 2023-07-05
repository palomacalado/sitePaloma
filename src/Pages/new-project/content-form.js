import React from 'react'
import FormContent from '../../Components/form-content/form-content'
import styled from 'styled-components'

const Container = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background-image: radial-gradient(circle, #fff, #f77177);
  display: flex;
  flex-direction: column;
  align-items: center;
`
function ContentForm() {
  return (
    <Container>
      <FormContent />
    </Container>
  )
}

export default ContentForm;