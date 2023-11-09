import styled from "styled-components";
import { theme } from "../../styles/theme";
import { Props } from "../../styles/typeGlobalStyles";

export const Header = styled.header<Partial<Props>>`
    position:fixed;
    top:0;
    left:0;
    background: ${(({$isFixed})=> $isFixed ? '#ffffffab': 'transparent')};
    backdrop-filter:${(({$isFixed})=> $isFixed ? 'blur(10px)' : 'blur(0px)' )};
    display:flex;
    align-items:center;
    justify-content:space-around;
    width:100%; 
    height:90px; 
    z-index:100;
    transition: 0.3s ease-in-out;
     
    h2{
        font-family: ${theme.fonts.mainFont}; 
        color:${theme.color.mainColor};
        text-transform:uppercase;

        @media (max-width:755px){
            z-index:12;
            
            
        }
        
    }

`;

export const Nav = styled.nav<Partial<Props>>`
    width:auto; 
    height:auto; 
    display:flex; 
    padding:5px;
    align-items:center;
    gap:60px;
    transition: 0.4s all ease-in-out;


    @media (max-width:755px) {
        position:absolute;
        top:0;
        left:0;
        z-index:10;
        flex-direction:column;
        justify-content:center;
        width:100vw;
        height:${(({$display})=> $display ? '100vh' : '0')};
        opacity:${(({$display})=> $display ? 1 : 0)};
        pointer-events:${(({$display})=> $display ? 'all' : 'none')};
        background-color:#1d976cc4;
        backdrop-filter:blur(2px);

    }



    ul{
        display:flex; 
        gap:30px;
        

        @media (max-width:755px) {
         position:relative;
         flex-direction:column;

        }




        li{
            font-family:${theme.fonts.mainFont}; 
            text-align:center;
             transition: 0.6s all ease-in;

            a{
                cursor: pointer;
                color:${theme.color.mainColor};
                font-weight:600;
                

                &:hover{
                    color:grey;
                }

                @media (max-width:755px) {

                    color:white;

                }
            }

            
            @media(max-width:755px){
                transform:${(({$display})=> $display ? 'scale(1.3)': 'scale(1)')};
            }

        }

        &:nth-child(2){
            gap:16px;
            flex-direction:row;
            position:relative;

            a{

                svg {
                font-size:28px;

                
                 &:hover{
                    
                    fill:grey;

                 }

                 @media (max-width:755px) {
                    fill:white;
                 }

                }

            }

            @media (max-width:755px) {
                
                &::before{
                    content:'';
                    position:absolute;
                    bottom:-10px; 
                    height:1px; 
                    background-color:white;
                    width:100%;


                }
            }
            
        }

        
    }


   

`;

export const LogoImage = styled.img`
cursor:pointer;
width:190px; 
height:auto; 

`;



export const MenuMobile = styled.div<Partial<Props>>`
    display:none;
    pointer-events:none;
    width:auto; 
    height:50px;

    svg{
        font-size:35px;
        fill:${(({$display})=> $display ? 'white' :  '#1D976C')};
        cursor: pointer;

        
    }

    @media (max-width:755px) {
        display:flex;
        pointer-events:all;
        z-index:10;
    }
`;
