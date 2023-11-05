import { useState, useEffect} from "react";
import { data, dataIcons } from "./data";
import { Header, LogoImage, MenuMobile, Nav } from "./styles";
import {BiMenuAltRight} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import { Link} from 'react-scroll';


export default function Navbar() {

    const [menuIsVisible, setMenuIsVisible] = useState<boolean>(false);
    const [fixed, setFixed] = useState<boolean>(false);

    function handleMenu (){

        setMenuIsVisible(!menuIsVisible);

    };

    useEffect(() => {
      

      function setFix(){

        if(window.scrollY >= 50){
            
            setFixed(true);

        } else {
            setFixed(false);

        }

      }
        window.addEventListener("scroll", setFix);

      return ()=>{

        window.removeEventListener('scroll', setFix);

      }
      
    }, [fixed]);


    useEffect(() => {
        
        const menu = document.getElementById('menu');

        const handleClick = (event:MouseEvent) =>{
            
            if((event.target as HTMLElement).classList.contains('item_nav')){

                setMenuIsVisible(false);


            }
        };


        if(menu){

            menu.addEventListener('click', handleClick);


            return () => {
                menu.removeEventListener('click', handleClick);
              };
        }
    
    
    
    }, []);
    




  return (

        <Header $isFixed={fixed}>

            <Link 
                to={'#home'} 
                spy={true} 
                smooth={true} 
                offset={-350} 
                duration={500}
            > 
                
            <LogoImage src="/assets/images/logo.png"/>        
            
            </Link>
            
      

            <Nav id='menu' $display={menuIsVisible}>

                
                <ul>

                {data.map((item, index)=> (


                <li key={index}>
                    <Link className="item_nav" to={item.to} spy={true} smooth={true} offset={item.offset} duration={500} > {item.text} </Link>

                </li>

                ))}
                    
                </ul>
               

               <ul>
                {dataIcons.map((item, index)=>(

                    <li key={index}>
                        
                     <a target="_blank" href={item.src}>{item.icon}</a>
                         
                    </li>


                ))}


               </ul>
                   
            </Nav>


            <MenuMobile $display={menuIsVisible} onClick={handleMenu}>

              {!menuIsVisible ? <BiMenuAltRight/>: <AiOutlineClose/>}      
            
            </MenuMobile>


        </Header>


    )
}
