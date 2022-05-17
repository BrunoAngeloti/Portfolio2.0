import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    &::-webkit-scrollbar {
      width: 10px;
    }
      
    /* Track */
    &::-webkit-scrollbar-track {
      border-radius: 5px;
    }
    
    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #6C63FF;
      border-radius: 5px;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`

export const theme = {
  colors:{
    main: "#3F3D56",
    secondary: "#6C63FF",
    white: "#FFFFFF",
    black: "#343633"
  }
};


