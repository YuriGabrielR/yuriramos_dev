
import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";


export const GlobalStyle = createGlobalStyle`

*{

    box-sizing:border-box; 
    margin:0; 
    padding:0;


    body{
        min-width:100vw;
        min-height:100vh; 
        overflow-x:hidden;
        
    }


    a{
        text-decoration:none;
        outline:none;

        &:visited{

            color : white;
        }
    }


    ul{
        list-style: none;
        padding: 0;
        margin: 0;
    }

    button{

        border:none;
        padding:none; 
        margin:0;
        padding:0;
        outline:none;

    }


    ::-webkit-scrollbar{
        width: 6px;  
        background-color: transparent;

    }

    ::-webkit-scrollbar-thumb{
    background-color: ${theme.color.mainColor};
    border-radius: 10px;


   }


}


`; 
