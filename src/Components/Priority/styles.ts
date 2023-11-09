import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Props } from "../../styles/typeGlobalStyles";

export const ContainerPriority = styled.section`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column; 
gap:50px; 
width:100%;
margin-top:70px;



@media (max-width:959px) {

    margin-top:150px
}

@media (max-width:580px) {
  
    margin-top:150px; 
}
`;

export const Title = styled.h2`
    display:flex;
    align-items:center;
    text-align:center;
    gap:5px;
    color: #1D976C;
    font-family:${theme.fonts.mainFont}; 
    text-transform:uppercase;
    font-weight:900;
    font-size:20px;
   
`;


export const ContentBox = styled.div<Partial<Props>>`
display:flex;
flex-wrap:wrap;
justify-content:center;
align-items:center;
width:100%;
gap:10px;
`;

export const BoxPriority = styled.div<Partial<Props>>`
    display:flex;
    flex-direction: column;
    gap:10px;
    width:280px;
    height:240px;
    padding:12px;
    border-bottom:${(({$color})=> `2px solid ${$color}`)};
    box-shadow:0px 0px 56px -8px rgba(0, 0, 0, 0.17);
   

    @media (max-width:360px) {
        width:250px;
    
    }

    p{

        font-family:${theme.fonts.mainFont}; 
        color: grey;
        font-size:14.7px;
        width:100%;

    }

    h3{
        color:${(({$color})=> `${$color}`)};
        font-family:${theme.fonts.mainFont}; 
        text-transform:uppercase;
        font-weight:900;
        font-size:18px;

    }
`;