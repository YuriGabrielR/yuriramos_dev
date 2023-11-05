import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Props } from "../../styles/typeGlobalStyles";
import { Button } from "../Main/styles";

export const Container = styled.section`
position:relative;
display:flex;
justify-content:space-around;
flex-wrap:wrap;
width:100%;
height:auto;
padding:15px;
padding-top:80px;
margin-top:190px;
border-top:1px solid #dee2e6;


&::before{
    position:absolute;
    top:-40px;
    left:90px;
    content:'Sobre Mim';
    text-transform:uppercase;
    font-family:${theme.fonts.mainFont};
    font-size:30px;
    font-weight:900;
    color:#808080;

    @media (max-width:960px){

        left:0; 
        padding-left:20px;
        font-size:28px;
        
    }

    @media (max-width:490px){
        opacity:0;

    }


    
}

&::after{
    position:absolute;
    top:-40px;
    right:90px;
    content:'Skills ';
    text-transform:uppercase;
    font-family:${theme.fonts.mainFont};
    font-size:30px;
    font-weight:900;
    color:#1D976C;

    @media (max-width:960px) {
        

        opacity:0;
        pointer-events:none;
    }

}


@media (max-width: 960px) {
    
    gap:60px;
}
`;


export const IconFloat = styled.span`
display:flex;
align-items:center;
justify-content:center;
position:absolute; 
background-color:white;
top:-50px;
width:100px; 
height:100px;
border-radius:50%;
box-shadow:0px 0px 56px -8px rgba(0, 0, 0, 0.17);
z-index:9;


svg{

    font-size:50px;

    @media (max-width:970px) {
        
        font-size:45px;

    }


    @media (max-width:450px) {

        font-size:35px;

    }
}

@media (max-width:960px) {

    width:80px; 
    height:80px;
    top:-40px;

}


@media (max-width:545px) {

width:70px; 
height:70px;
top:-40px;

}


@media (max-width:450px) {

width:55px; 
height:55px;
top:-30px;

}

`;

export const TitlesAbout = styled.h2`
    position:relative;
    display:flex;
    align-items:center;
    gap:5px;
    font-family:${theme.fonts.mainFont}; 
    color: #6ba88c;
    text-transform:uppercase;
    font-weight:900;
    font-size:22px;
    

    @media (max-width:1189px) {

     font-size:20px;
    
    
    }


    @media (max-width:345px) {

    font-size:18px;


    }

`;

export const ProfileAbout = styled.div`
position:relative;
display:flex; 
align-items:center;
justify-content:center;
flex-direction:column;
gap:30px;

ul{
    display:flex;
    gap:15px;
}


&::after{
    position:absolute;
    content:''; 
    background:url("/assets/images/About/pattern.svg");
    object-fit:cover;
    z-index:-1;
    height:200px; 
    width:200px;
    left:-25px;
    top:40px;
    opacity:50%;
}
`;

export const ImageAbout = styled.img`
width:250px; 
height:250px; 

`;

export const ContentAbout = styled.div`
display:flex;
flex-direction:column;
padding:10px;
align-items:center;
gap:55px;
width:50%;

@media(max-width:960px){

    width:100%;
    

}

`;


export const TextAbout = styled.div`
max-width:500px;
display:flex; 
flex-direction:column; 
gap:18px; 


p{
    font-family:${theme.fonts.mainFont}; 
    color: grey;
    text-align:center;
    font-size:15.5px;
    width:100%;
    
    strong{
        color:#73bb9a;
    }

    @media (max-width:1189px) {

        font-size:14.7px;

        
    }
}
`;


export const ButtonCV = styled(Button)`
width:160px;
`; 

export const ContentSkills = styled.div`
display:flex;
flex-direction:column;
align-items:center;
gap:60px;
width:50%;
padding-left:25px; 
border-left:1px solid #dee2e6;

@media (max-width: 960px) {

    border-top:1px solid #dee2e6;
    border-left:none;
    padding-top:35px;
    padding-left:8px;
    padding-right:8px;
    width:100%;
}

`;


export const TitleCustom = styled(TitlesAbout)`
justify-content:center;
width:100%;
`;



export const TechsBox = styled.div`
display:flex;
flex-direction:column;


div{ 
    display:flex;
    flex-direction:column;
    gap:18px;
    width:100%;

    p{

        font-family:${theme.fonts.mainFont}; 
        color: grey;
        font-size:15.5px;

    }

    ul{
        display:flex;
        align-items:center;
        justify-content:center;
        gap:20px;
        width:100%;
        text-align:center;
        font-family:${theme.fonts.mainFont};
        flex-wrap:wrap;
    }   

}
`;

export const LiIcons = styled.li<Partial<Props>>`
    
 cursor:pointer;
 position:relative;


 @media (max-width:970px) {

    cursor: default;
    
 }

  &::after {
    position:absolute;
    pointer-events:none;
    content:attr(data-text);
    background-color:#1D976C;
    font-weight:700;
    font-size:14px;
    text-align: center;
    border-radius:6px;
    color:white;
    opacity:0;
    width:0%;
    height:auto;
    bottom:-50px;
    left:0;
    padding:5px;
    transition: 0.3s all ease-in-out;


    @media (max-width:1061px) {
        
        bottom:-30px;
    }


  }
            
        


        &:hover::after{
            pointer-events:all;
               opacity:1;
                width:${(({$width})=> $width ? '100px' : '100%')}; 


            @media (max-width: 970px)  {
                pointer-events:none; 
                width:0%;
                opacity:0;
                
            }
                    
        }

        
`;

export const LibsBox = styled.div`
display:flex;
flex-direction:column;
gap:18px;
width:100%;

    p{

         font-family:${theme.fonts.mainFont}; 
         color: grey;
         font-size:15.5px;


    }

   
    ul{
        display:flex;
        justify-content:center;
        align-items:center;
        gap:20px;
        width:100%;
        font-family:${theme.fonts.mainFont};
        flex-wrap:wrap;
    }

`;

export const LiIconsLibs = styled.li<Partial<Props>>`

cursor:pointer;
 position:relative;

    @media(max-width:970px) {

     cursor: default;

    }


  &::after {
    position:absolute;
    pointer-events:none;
    content:attr(data-text);
    background-color:#1D976C;
    font-weight:700;
    font-size:14px;
    text-align:center;
    border-radius:6px;
    color:white;
    opacity:0;
    width:120px;
    height:auto;
    bottom:-40px;
    left:0;
    padding:5px;
    transition: 0.3s all ease-in-out;

  }
            
        


        &:hover::after{
            pointer-events:all;
               opacity:1;
                height:auto;
                width:${(({$width})=> $width ? '100px' : '72px')}; 


                @media (max-width: 970px)  {
                    pointer-events:none; 
                    width:0%;
                    opacity:0;
                    
                }; 
                    
        }
`;


export const ToolsBox = styled.div`
display:flex;
flex-direction:column; 
gap:18px;

   
    p{

         font-family:${theme.fonts.mainFont}; 
         color: grey;
         font-size:15.5px;


    }

   
    ul{
        display:flex;
        justify-content:center;
        align-items:center;
        gap:20px;
        width:100%;
        font-family:${theme.fonts.mainFont};
    }
`;


export const LiIconsTools = styled.li<Partial<Props>>`
cursor:pointer;
 position:relative;


    @media(max-width: 970px){
        cursor:default;
                
    }


  &::after {
    position:absolute;
    pointer-events:none;
    content:attr(data-text);
    background-color:#1D976C;
    font-weight:700;
    font-size:14px;
    text-align:center;
    border-radius:6px;
    color:white;
    opacity:0;
    width:120px;
    height:auto;
    bottom:-35px;
    left:0;
    padding:5px;
    transition: 0.3s all ease-in-out;

  }
            
    

        &:hover::after{
            pointer-events:all;
               opacity:1;
                height:auto;
                width:${(({$width})=> $width ? '120px' : '80px')};

             @media(max-width: 970px)  {
                pointer-events:none; 
                width:0%;
                opacity:0;
                
             }
                    
        }
`;
