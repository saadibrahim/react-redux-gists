import styled from 'styled-components'

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  float: left;
`

export const Card = styled.div`
	background: #ffffff;
	padding: 20px;
	margin-bottom: 15px;
	text-decoration: none;
	color: ${props => props.theme.textColor};
	text-align: left;
	box-shadow: 1px 1px 3px 1px rgba(0,0,0,.2);
`

export const CardList = Card.extend`
	transition: all .2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;