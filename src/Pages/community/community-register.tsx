import styled from 'styled-components'
import FormCadastro from '../../Components/form-cadastro/form-cadastro';


const Container = styled.div`
  min-height: 100vh;
  max-width: 100vw;
  background-image: radial-gradient(circle, #fff, #f77177);
  display: flex;
  flex-direction: column;
  align-items: center;
`
function CommunityRegister() {
 
  return (
      <Container>
        <FormCadastro />
      </Container>
    )
  }
  
export default CommunityRegister;
