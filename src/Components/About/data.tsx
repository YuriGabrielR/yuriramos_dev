import { IconType } from "react-icons"
import { AiFillHtml5 } from "react-icons/ai"
import { BiLogoCss3, BiLogoJavascript, BiLogoTypescript} from "react-icons/bi"
import { FaNodeJs, FaSass  } from "react-icons/fa"
import { GrReactjs } from "react-icons/gr"
import { SiAdobephotoshop, SiAxios, SiCanva, SiExpress, SiFirebase, SiInsomnia, SiMongodb, SiMongoose, SiMui, SiMysql, SiPostgresql, SiPostman, SiPrisma, SiReactquery, SiReactrouter, SiRedux, SiSequelize, SiStyledcomponents, SiSwiper } from "react-icons/si"
import {TbBrandFramerMotion} from "react-icons/tb"
import {PiFigmaLogoDuotone} from "react-icons/pi"
import { BsGit, BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs"



const Icon = (Icon:IconType, color:string, size:string)=> <Icon color={color} size={size} /> ;

export const FrontEndTechs = [

    {
        icon:Icon(AiFillHtml5, '#E5532D', '50px'), 
        iconName:'HTML',
        customWidth: false,

    }, 
    
    
    {
        icon:Icon(BiLogoCss3, '#306AF1', '50px'), 
        iconName:'CSS', 
        customWidth: false,

    }, 
 
    {
        icon:Icon(BsGit, '#E84D31', '45px'), 
        iconName:'GIT', 
        customWidth: false,

    }, 


    {
        icon:Icon(FaSass, '#CF6C9C', '50px'), 
        iconName:'Sass', 
        customWidth: false,

    }, 
    {
        icon:Icon(BiLogoJavascript, '#F7E025', '50px'), 
        iconName:'JavaScript',
        customWidth: true,

    }, 


    {
        icon:Icon(BiLogoTypescript, '#377CC8', '50px'), 
        iconName:'Typescript',
        customWidth: true,


    }, 


    {
        icon:Icon(GrReactjs, '#66DBFB', '50px'), 
        iconName:'React', 
        customWidth: false,

    }, 


    {
        icon:Icon(SiStyledcomponents, '#E7957E', '70px'), 
        iconName:'Styled Components', 
        customWidth: true,


    }, 

    
]; 


export const BackEndTechs = [
    {

        icon:Icon(FaNodeJs, '#83CD29', '45px'), 
        iconName:'Node', 
        customWidth: false,

    }, 

    {

        icon:Icon(SiExpress, '#353535', '45px'), 
        iconName:'Express', 
        customWidth: true,

    }, 

    
    {

        icon:Icon(BiLogoTypescript, '#377CC8', '50px'), 
        iconName:'Typescript', 
        customWidth: true,

    }, 

    {

        icon:Icon(SiMysql, '#005A85', '50px'), 
        iconName:'MySQL', 
        customWidth: false,

    }, 

    {

        icon:Icon(SiPostgresql, '#005A85', '40px'), 
        iconName:'PostgreSQL', 
        customWidth: true,

    }, 
    {

        icon:Icon(SiMongodb, '#3F9B38', '40px'), 
        iconName:'MongoDB', 
        customWidth: true,

    }, 

    {

        icon:Icon(SiFirebase, '#FFCB2E', '40px'), 
        iconName:'Firebase', 
        customWidth: true,

    }, 

    {

        icon:Icon(SiSequelize, '#2A7DBF', '40px'), 
        iconName:'Sequelize', 
        customWidth: true,

    }, 

    
    {

        icon:Icon(SiPrisma, '#143A51', '40px'), 
        iconName:'Prisma', 
        customWidth: true,

    }, 

    
    {

        icon:Icon(SiMongoose, '#8B1D1F', '40px'), 
        iconName:'Mongoose', 
        customWidth: false,

    }, 

]

export const IconsLibs = [


    { 
     icon: Icon(TbBrandFramerMotion, '#6F0FFF', '40px'),
     iconName:'Motion', 
     customWidth: true,

    },

    {
        icon:Icon(SiMui, '#007FFF', '40px'), 
        iconName:'Material UI', 
        customWidth: true,


    }, 


     
    {
        icon:Icon(SiReactquery, '#FF4154', '40px'), 
        iconName:'React Query', 
        customWidth: true,

    }, 

    {
        icon:Icon(SiAxios, '#671DDF', '40px'), 
        iconName:'Axios', 
        customWidth: true,

    }, 

    
    {
        icon:Icon(SiReactrouter, '#F44250', '40px'), 
        iconName:'React Router', 
        customWidth: true,

    }, 




    {
        icon:Icon(SiSwiper, '#0080FF', '40px'), 
        iconName:'SwiperJS', 
        customWidth: false,

    }, 


    
    {
        icon:Icon(SiRedux, '#7248B6', '40px'), 
        iconName:'Redux', 
        customWidth: false,

    }, 


];


export const IconsTools = [

    {
        icon:Icon(SiAdobephotoshop, '#002630', '40px'), 
        iconName:'Photoshop', 
        customWidth: false,

    }, 


    
    {
        icon:Icon(PiFigmaLogoDuotone, '#FF7667', '40px'), 
        iconName:'Figma', 
        customWidth: false,

    }, 


    {
        icon:Icon(SiCanva, '#02C1CD', '40px'), 
        iconName:'Canva', 
        customWidth: false,

    }, 

    {
        icon:Icon(SiInsomnia, '#6D42ED', '40px'), 
        iconName:'Insomnia', 
        customWidth: false,

    }, 

    {
        icon:Icon(SiPostman, '#FF6C37', '40px'), 
        iconName:'Postman', 
        customWidth: false,

    }, 



]

export const IconsAbout = [


    {
        icon: Icon(BsGithub, '#2E9F77', '30px'),
        src:'https://github.com/YuriGabrielR',
    },

    
    {
        icon: Icon(BsLinkedin, '#2E9F77', '30px'),
        src:'https://www.linkedin.com/in/yurigabrielramos/',
    },

    
    {
        icon: Icon(BsWhatsapp, '#2E9F77', '30px'),
        src:'https://api.whatsapp.com/send?phone=5512981946294',
    },



]
