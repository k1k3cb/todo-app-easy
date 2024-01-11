import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
  }

  img{
    display: block;
    max-width: 100%;
  }
  
  body{   
    
    margin: 0 auto;
    max-width: 1440px;
    text-align: center;
    color: #9092a5;
    background-color: #fafafa;
    font-family: 'Josefin Sans', sans-serif;
    
    
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
`;
