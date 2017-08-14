import styled from 'styled-components'

export const TagsContainer = styled.div`
  margin-bottom: 15px;
`

export const Chip = styled.span`
  padding: 6px 15px;
  border-radius: 15px;
  background: ${props => props.theme.primaryColor};
  color: #ffffff;
  font-size: 12px;
  display: inline-block;
  margin: 0 6px 0 0;
`