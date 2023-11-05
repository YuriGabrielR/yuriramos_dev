import { IconType } from "react-icons";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

const Icon = (Icon:IconType, color:string, size:string)=> 
<Icon color={color} size={size} />;

export const IconsFooter = [


    {
        icon: Icon(BsGithub, 'white', '30px'),
        src:'https://github.com/YuriGabrielR',
    },

    
    {
        icon: Icon(BsLinkedin, 'white', '30px'),
        src:'https://www.linkedin.com/in/yurigabrielramos/',
    },

    
    {
        icon: Icon(BsWhatsapp, 'white', '30px'),
        src:'https://api.whatsapp.com/send?phone=5512981946294',
    },



]
