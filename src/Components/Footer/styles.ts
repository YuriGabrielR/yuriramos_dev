import styled from "styled-components";
import { theme } from "../../styles/theme";
 
export const Container = styled.footer`
position:relative;
display:flex;
justify-content:space-between;
width:100%;
height: 600px;
background: #348F50;
background: -webkit-linear-gradient(to right, #56B4D3, #348F50);  
background: linear-gradient(to right, #bfbfbf, #348F50); 
margin-top:200px;

@media (max-width:825px) {

  flex-direction:column;
  height:auto;
  
}




&::before{
  content:'';
  position:absolute;
  background:url('/assets/images/Form/callme.png');
  background-size:cover;
  background-position:center;
  width:280px;
  height:270px;
  left:-25px;
  bottom:0;

  @media (max-width:825px) {

    width:230px;
    height:200px;

  }

  @media (max-width:530px)  {
   display:none;    

  }

}


&::after {
  content:'';
  position:absolute;
  right:0;
  bottom:0; 
  background:url('/assets/images/Form/armwall.png');
  background-size:cover;
  background-position:center;
  width:220px;
  height:230px;
  transform:scaleX(-1);

  @media (max-width:1189px)  {
   display:none;    

  }

}
`;


export const IconFloat = styled.span`
display:flex;
align-items:center;
justify-content:center;
position:absolute; 
background-color:white;
top:-40px;
left:50%;
transform:translateX(-50%);
width:90px; 
height:90px;
border-radius:50%;
box-shadow:0px 0px 56px -8px rgba(0, 0, 0, 0.17);
z-index:9;


  @keyframes bounce {

    from{
      transform: translateY(0px);

    }

    to{
      transform: translateY(5px) ;
    }


  };


svg{
  animation: bounce 0.3s infinte alternate;
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


export const ContainerSM = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:30px;
width:50%; 
height:400px;
padding:20px;


@media (max-width:825px) {

width:100%;
height:auto;
margin-top:50px;

}

h2{
  font-family:${theme.fonts.mainFont};
  color:white;
  font-size:20px;

  @media (max-width:985px) {
      text-align:center;
  }
  
}

`;

export const EmailArea = styled.div`

display:flex;
align-items:center;
justify-content:center;
gap:20px;
width:auto;

span{

  display:flex;
  align-items:center;
  flex-direction:column;

  h4{
    display:flex;
    align-items:center;
    gap:5px;
    font-family:${theme.fonts.mainFont}; 
    color: white;
  }

  p{
    font-family:${theme.fonts.mainFont};
    color:white;
    font-weight:500;
    font-size:14px;
  }

}
`;



export const SocialMedia = styled.div`
display:flex;
align-items:center;
width:auto;
gap:20px;
padding:5px;


  ul{
  display:flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  border-bottom: 1px solid #ffffff66;
}
`;
