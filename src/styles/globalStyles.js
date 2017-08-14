import { injectGlobal } from 'styled-components'

injectGlobal`
	@import url('https://fonts.googleapis.com/css?family=PT+Sans');
	@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

	body {
	  margin: 0;
	  padding: 50px 15px;
	  font-family: 'PT Sans', sans-serif;
		background: rgba(0, 0, 0, 0.05);
		font-size: 16px;
		color: #333;
	}
`;