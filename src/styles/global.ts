import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
     background : #232249;
     -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Ubuntu, sans-serif; 
  }

  div.Toastify__toast.Toastify__toast--error{
    background : #f95a59;
    font-weight: 500;
  }

  
`;
