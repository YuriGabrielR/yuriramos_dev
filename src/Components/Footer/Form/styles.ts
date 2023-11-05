import styled from "styled-components";
import { theme } from "../../../styles/theme";
import { Props } from "../../../styles/typeGlobalStyles";

export const FormArea = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:50%;
height:100%;

@media (max-width:825px) {

width:100%;
padding-bottom:10px;

}
`;



export const FormEmail = styled.form`
position:relative;
display:flex;
gap:10px;
flex-direction:column;
align-items:center;
justify-content:center;
width:500px; 
height:auto;
padding:10px;
background-color:white;
transition: 0.3s ease-in-out;
border-radius:10px;


@media (max-width:1052px) {
  width:390px;
}


@media (max-width:440px) {
  width:320px;
}

@media (max-width:350px) {
  width:270px;
}



label{
  display:flex;
  flex-direction:column;
  gap:8px;
  width:90%;
  padding:10px;
  


  p{
    width:100%;
    font-family:${theme.fonts.mainFont};
    font-weight:600;
    
    strong{
      color: #c36679;
    }

    @media (max-width:350px) {
    font-size:15px;
    }
  }


  input{
    border:1px solid #c4c4c4;
    width:90%;
    padding:5px;
    font-size:14px;

    &:focus{
      
      outline:0;
    }

    @media (max-width:1052px) {
        width:100%;
    }

  }


  textarea{
    font-family:${theme.fonts.mainFont};
    padding:5px;
    width:90%;
    resize:none;
    height:80px;
    border:1px solid #c4c4c4;

      &:focus{
        outline:none;
      }

      @media (max-width:1052px) {
        width:100%;
    }

  }
}

button{
  cursor: pointer;
  background-color:#AEB9B1;
  border-radius:12px;
  outline:none;
  width:300px;
  height:30px;
  font-family:${theme.fonts.mainFont};
  font-size:16px;
  font-weight:600;
  color:white;
  transition: 0.3s ease-in-out;


  
@media (max-width:440px) {
  width:270px;
}


@media (max-width:350px) {
  width:240px;
}

  &:hover{
    background-color:#5F9E72;
  }
}

`;


export const SucessMessage = styled.span<Partial<Props>>`
height:${(({$isVisible})=> $isVisible ? '50px': '0px')};
width:90%;
transition: 0.4s ease-in-out;


@media (max-width:1052px) {
        width:100%;

}



h3{
    opacity:${(({$isVisible})=> $isVisible ? '1': '0')};
    color:${theme.color.mainColor};
    font-family:${theme.fonts.mainFont};
    font-size:14px;
    text-align:center;


    @media (max-width:1052px) {
        font-size:13px;

    }

    @media (max-width:350px) {
    font-size:12px;
    }
}


`;