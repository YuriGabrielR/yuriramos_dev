import { IconType } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";
import { BiMobileAlt } from "react-icons/bi";
import { FaRegLightbulb } from "react-icons/fa";
import { IoIosGlasses } from "react-icons/io";

const Icon = (Icon:IconType, color:string, size:string)=> <Icon color={color} size={size} /> ;



export const IconsPriority = [


    {
        icon: Icon(FaRegLightbulb, '#2c98f0', '29px'),
        title: 'Design Criativo',
        description:'Na criação dos meus projetos, procuro sempre oferecer um design criativo e autêntico, penso que é importante fazer algo único para cada experiência. ',
        color: '#2c98f0',

    }, 

    {
        icon:Icon(BiMobileAlt, '#ec5453', '29px'),
        title: 'Responsividade',
        description:'Um site responsivo oferece conteúdo de qualidade em qualquer dispositivo, independente do modelo, por isso adoto o conceito do Mobile First em todos meus projetos.',
        color:'#ec5453',
        

    }, 

    {
        icon: Icon(IoIosGlasses, '#f9bf3f', '29px'),
        title: 'Acessabilidade',
        description:'Trato como obrigatório assegurar que todos possam obter uma boa experiência ao navegar em um site, portanto, procuro me atentar minuciosamente nestes detalhes.', 
        color:'#f9bf3f',

    }, 


    {
        icon: Icon(AiOutlineSearch, '#a84cb8', '29px'),
        title: 'SEO',
        description:'Viso utilizar técnicas que façam meus projetos serem bem ranqueados pelos mecanismos de buscas, tornando o site então, notório quando pesquisado.',
        color:'#a84cb8',


    }, 

    

];