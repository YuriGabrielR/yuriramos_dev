import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Props } from "../../styles/typeGlobalStyles";

export const Container = styled.section`
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    gap:50px;
    width:100%;
    height:auto;
    margin-top:100px;
`;

export const Title = styled.div`

p{
    font-size:13px;
    font-family:${theme.fonts.mainFont}; 
    font-weight:500;
    color:${theme.color.secondaryColor};


}

h2{
    position: relative;
    font-family:${theme.fonts.mainFont}; 
    font-weight:800;
    text-transform:uppercase; 
    font-size:30px;
    color:${theme.color.mainColor};


    &::before{
        content:''; 
        position:absolute;
        bottom:0; 
        height:1px;
        width:100%;
        background-color:${theme.color.mainColor};

    }

}


`; 


export const Wrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    gap:50px;
    max-width:1200px; 
    height:100%; 

`;


export const Project = styled.div`
display:flex; 
flex-direction:column;
gap:25px;
width:500px; 
height:auto; 

&:nth-child(even){

    margin-top:80px;

    @media (max-width:1049px) {
        
        margin-top:0;
    }

    

}


    @media (max-width:550px){
        align-items:center;
        justify-content:center;
        width:auto;
    }
`;


export const ProjectImage = styled.div<Partial<Props>>`
width:500px;
height:300px;
background-image:${(({$src})=> `url(${$src})`)};
background-size:contain;
background-repeat:no-repeat;
background-position:center;


@media (max-width:550px){
width:400px;
height:270px;
}

@media (max-width:440px){
width:350px;
height:220px;
}

@media (max-width:375px){
width:300px;
height:200px;
}


`;


export const TextsProjects = styled.div`
display:flex;
flex-direction:column; 
gap:20px; 

h3{
    font-family:${theme.fonts.mainFont};
    text-transform:uppercase;
    font-weight:800;
    color:${theme.color.secondaryColor};


    @media (max-width:1055px){

        text-align:center;

}

}

p{
    font-family:${theme.fonts.mainFont};
    font-size:16px;
    color:${theme.color.secondaryColor};
    padding: 0 5px;

    @media (max-width:1055px){
        text-align:center;
    }

    @media (max-width:550px){
        font-size:15px;
        width:100%;
        
    }

    
}

`;


export const TechsTexts = styled.div`

display:flex;
flex-direction:column;
gap:20px; 


span{
    display:flex;
    flex-direction:column;
    gap:10px; 

    h4{
        font-family:${theme.fonts.mainFont};
        color:${theme.color.secondaryColor};
        text-transform:uppercase;

        @media(max-width:1055px){

        text-align:center;


        }
    
    }


}

ul{

    display:flex;
    gap:5px;
    
    @media(max-width:1055px){

    justify-content:center;


    }
}


p{
    font-family:${theme.fonts.mainFont};
    color:${theme.color.secondaryColor};
    font-size:16px;
    
    @media(max-width:1055px){
     font-size:15px;   
     text-align:center;


    }
}

`;

export const ButtonsArea = styled.div`
display:flex;
gap:10px;

@media (max-width:1055px) {
    justify-content:center;

}


button{

    width:110px;
    height:30px;
    background-color:${theme.color.secondaryColor};
    border-radius:10px;

    a{
        display:flex;
        align-items:center;
        justify-content:center;
        gap:5px;
        width:100%;
        height:100%;
        color:white;
        font-family:${theme.fonts.mainFont}; 
        font-size:15px;
        font-weight:700;
        
        svg{
            font-size:20px;
            fill:white;
        }
        
    }
}

`;