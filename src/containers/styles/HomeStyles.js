import styled from 'styled-components'

export const TextInput = styled.input`
  border: 3px solid ${props => props.theme.primaryColor};
  padding: 15px;
  width: calc(100% - 36px);
  font-size: 16px;
  text-align: center;
  max-width: 450px;
  margin: 0 auto 30px;
`