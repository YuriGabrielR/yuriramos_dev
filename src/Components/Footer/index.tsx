import { Container, EmailArea, IconFloat, ContainerSM, SocialMedia } from "./styles";
import {MdOutlineMarkEmailUnread} from "react-icons/md"
import { IconsFooter } from "./data";
import Form from "./Form";



export default function Footer() {

  return (

    <Container>

        <IconFloat id="#Contato" >
          <MdOutlineMarkEmailUnread color='#71A481'/>
        </IconFloat>



      <ContainerSM>

        <h2> Fale comigo, será um prazer conversarmos. </h2>

        <EmailArea>

          <span>

            <h4> 
             E-mail
            </h4>

            <p>yurigabriel21@yahoo.com</p>

          </span>

        </EmailArea>


        <SocialMedia>

          <ul>
            {IconsFooter.map(({icon, src}, index)=>(

                <li key={index}>
                  <a target="_blank" href={src}>{icon}</a> 
                </li>

            ))}
          </ul>

        </SocialMedia>

      </ContainerSM>

      <Form/>

    </Container>

  )
}
