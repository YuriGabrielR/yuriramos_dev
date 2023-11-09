import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.main`
display:flex; 
justify-content:center;
flex-wrap:wrap-reverse;
align-items:center;
gap:30px;
width:100%;
height:100vh;
padding:20px;


@media (max-width:959px) {
    margin-top:120px;
    height:500px;
    gap:0px;
}
`;

export const ImageMain = styled.img`
width:350px; 
height:350px; 


@media (max-width:580px) {
    width:300px; 
    height:300px;
}

`;


export const MainText = styled.div`
display:flex; 
flex-direction:column; 
gap:15px;

div{
    display:flex;
    flex-direction:column;

    p{  
        font-size:20px;
        font-family:${theme.fonts.mainFont}; 
        color:${theme.color.mainColor};
        font-weight:500;

        @media (max-width:929px) {
            text-align:center
            
        }
    }

    h1{
        font-size:36px;
        font-family:${theme.fonts.mainFont}; 
        color:grey;
        font-weight:900;


        @media (max-width:929px) {
            text-align:center;
            
        }

        @media (max-width:580px) {
            font-size:6.2vw;
        }
     
    
    }


}


span{
    display:flex;
    flex-direction:column;
    gap:20px;

    @media (max-width:929px) {

        justify-content:center;
        align-items:center;
            
    }

    @media (max-width:580px) {
        align-items:center;
    }

    p{  
        max-width:540px;
        font-size:18px;
        font-family:${theme.fonts.mainFont}; 
        word-wrap:break-word;
        color:${theme.color.mainColor};
    

        @media (max-width:929px) {
            text-align:center
            
        }


        @media (max-width:580px) {
           
            font-size:16px;
            
        }
    }


   

}

`;



export const Button = styled.button`
cursor: pointer;
width:180px; 
height:40px;
background: #1D976C;  
border-radius:24px;
transition: background 0.4s;


a{

    h3{
        
        color:white;
        font-family:${theme.fonts.mainFont};

    }

}


&:hover {
    background:${theme.color.secondaryColor};
  }

`;