import { IconType } from "react-icons";
import {BsGithub, BsLinkedin} from "react-icons/bs"
import { theme } from "../../styles/theme";
export const data = [



    {
        to: '#Sobre', 
        text: 'Sobre', 
        offset: -350,
    }, 

    
    {
        to: '#Portfólio', 
        text: 'Portfólio',
        offset: -210,
 
    }, 

    {
        to:'#Contato', 
        text:'Contato', 
        offset: -185,

    }

]


export const iconStyle = 
(Icon:IconType)=> <Icon color={theme.color.mainColor}/>;


export const dataIcons = [

    {
        icon: iconStyle(BsGithub), 
        src:'https://github.com/YuriGabrielR'
    },


    {
        icon: iconStyle(BsLinkedin), 
        src:'https://www.linkedin.com/in/yurigabrielramos/'
    }


]