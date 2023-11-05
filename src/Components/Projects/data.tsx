import { IconType } from "react-icons"
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi"
import { FaSass } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr"
import { SiReactrouter, SiStyledcomponents, SiSwiper } from "react-icons/si"
import { TbApi, TbBrandFramerMotion } from "react-icons/tb";

 
const Icon = 
(Icon:IconType, color:string, size:string) => <Icon color={color} size={size} /> ;

 export const data = [
    {
        src:'/assets/images/Projects/doceluann.png', 
        name: 'Doce Luan - Pipocas Gourmet', 
        description:'Pagina criada para uma pipocaria gourmet, onde o intuito do site era apresentar os produtos da empresa e os serviços prestados pela mesma. Neste projeto, procurei utilizar um design amigável e interativo.', 
        textTecs: 'React · TypeScript · JavaScript  · Styled Components · Swiper ' ,
        techs:[
         Icon(GrReactjs, '#66DBFB', '40px'),
         Icon(BiLogoTypescript, '#377CC8', '40px'),
         Icon(BiLogoJavascript, '#F7E025', '40px'), 
         Icon(SiStyledcomponents, '#E7957E', '40px'),
         Icon(SiSwiper, '#0080FF', '35px'),
        ], 


        deploy:'https://doce-luan-pipocas-gourmet.vercel.app/',
        repository: 'https://github.com/YuriGabrielR/doce-luan-pipocas-gourmet'


    }, 

    {
        src:'/assets/images/Projects/dataprotect.png', 
        name: 'Data Protect - Digital Solutions', 
        description:'É um site institucional que apresenta informações sobre a empresa, incluindo preços, formulário de login e afins. Adicionei animações e slides para uma melhor interatividade do usuário.'
        , 
        textTecs: 'React · TypeScript · JavaScript  · Styled Components · Motion · React Router',        
        techs:[
         Icon(GrReactjs, '#66DBFB', '40px'),
         Icon(BiLogoTypescript, '#377CC8', '40px'),
         Icon(BiLogoJavascript, '#F7E025', '40px'), 
         Icon(SiStyledcomponents, '#E7957E', '40px'),
         Icon(TbBrandFramerMotion, '#6F0FFF', '40px'),
         Icon(SiReactrouter, '#F44250', '40px'),
         
        ], 


        deploy:'https://data-protect-digital-solutions-ygr.vercel.app/',
        repository: 'https://github.com/YuriGabrielR/data-protect-digital-solutions'


    }, 



    {
        src:'/assets/images/Projects/precisofazer.png', 
        name: 'Plataforma - Preciso Fazer', 
        description:'A plataforma Preciso Fazer trata-se de um gerenciador de tarefas que visa auxiliar a você na organização de seus afazeres, o objetivo deste software é ajuda-lo(a) a obter uma melhor produtividade e planejamento de suas atividades durante o dia, semana ou mês.', 
        textTecs: 'JavaScript · Sass · API Rest',
        techs:[
         Icon(BiLogoJavascript, '#F7E025', '40px'), 
         Icon(FaSass, '#CF6C9C', '40px'), 
         Icon(TbApi, 'blue', '40px'),

        ], 


        deploy:'https://preciso-fazer-tarefas.vercel.app/',
        repository: 'https://github.com/YuriGabrielR/preciso-fazer-tarefas'


    }, 

    {
        src:'/assets/images/Projects/simplelinks.png', 
        name: 'Simple Links - Encurtador de URLs', 
        description:'A Simple Links é uma plataforma que permite o encurtamento de qualquer link que você desejar, o deixando mais elegante, sem números malucos e textos gigantes.', 
        textTecs: 'JavaScript · Sass · API Rest',
        techs:[
            Icon(BiLogoJavascript, '#F7E025', '40px'), 
            Icon(FaSass, '#CF6C9C', '40px'), 
            Icon(TbApi, 'blue', '40px'),
   
        ], 


        deploy:'https://yurigabrielr.github.io/encurtador/',
        repository: 'https://github.com/YuriGabrielR/encurtador'


    }, 




 ]