import { BackEndTechs, FrontEndTechs, IconsAbout, IconsLibs, IconsTools } from "./data";
import { AreaTechsBox, ButtonCV, Container, ContentAbout, ContentSkills, IconFloat, ImageAbout, LiIcons, LiIconsLibs, LiIconsTools, LibsBox, ProfileAbout, TechsBox, TextAbout, TitleCustom, TitlesAbout, ToolsBox } from "./styles";
import {CgCodeSlash} from "react-icons/cg";

export default function About() {
  return (
    <Container>

      <IconFloat>
          <CgCodeSlash  color="#1D976C"/>
      </IconFloat>


      <ContentAbout>

        <ProfileAbout>

        <ImageAbout id="#Sobre" alt="Imagem-do-Yuri-Ramos" 
        src="/assets/images/About/About.png"/>

          <div>

            <ul>

              {IconsAbout.map(({icon, src}, index)=>(

                <li key={index}>
                  <a target="_blank" href={src}>{icon}</a>
                </li>


              ))}

            </ul>

          </div>

          
        </ProfileAbout>

        <TextAbout>

          <TitleCustom>
            Sobre mim
          </TitleCustom>

          <p>
            Como você já sabe, meu nome é Yuri e tenho 23 anos, sou formado em <strong>Análise e Desenvolvimento de Sistemas </strong> pela <strong>UNESA</strong> e hoje atuo como freelancer desenvolvendo projetos na função de <strong>Desenvolvedor Fullstack.</strong>
          </p>

         


        </TextAbout>


        <ButtonCV> 
          <a target="_blank" href="https://drive.google.com/file/d/1lCUGGNsDJc2SgPmyV636HTblI3olGzOz/view?usp=sharing">
            
             <h3>Currículo</h3>   

          </a>

        </ButtonCV>

      </ContentAbout>

      <ContentSkills>

        <TechsBox>
          <AreaTechsBox>
            <TitlesAbout>Tecnologias que utilizo</TitlesAbout>

            <p>Como <strong>Desenvolvedor Front-End</strong> , obtenho experiência nas seguintes
              tecnologias: <strong>HTML</strong>, <strong>CSS</strong>,
              <strong> Git/Github</strong>, <strong>SASS</strong>, <strong>JavaScript</strong>,
              <strong> TypeScript </strong> ,<strong> React</strong> e
              <strong> Styled Components </strong>.
            </p>

            <ul>

            {FrontEndTechs.map((i, index)=>(

              <LiIcons $width={i.customWidth} data-text={i.iconName} key={index}> {i.icon} </LiIcons>

            ))}

            </ul>
                            
            <p> Como <strong>Desenvolvedor Back-End</strong>  , desenvolvo
            <strong> API's</strong> e demais serviços utilizando as tecnologias: 
              <strong> Node.js</strong>, <strong>Express</strong>,
              <strong> TypeScript</strong>, <strong>MySQL</strong>, <strong>PostgreSQL</strong>,
              <strong> MongoDB </strong> ,<strong> Firebase</strong>, <strong> Sequelize </strong>, <strong> PrismaORM </strong> e  <strong> Mongoose </strong>.
            </p>
                
            <ul>

            {BackEndTechs.map((i, index)=>(

              <LiIcons $width={i.customWidth} data-text={i.iconName} key={index}> {i.icon} </LiIcons>

            ))}

            </ul>   
         

            
          </AreaTechsBox>

        </TechsBox>


        <LibsBox> 
            
            <TitlesAbout> Bibliotecas </TitlesAbout>
            <p> 
              O uso de bibliotecas nos permite obter uma maior produtividade quando estamos desenvolvendo alguma aplicação, abaixo, deixo algumas das que utilizo: <strong>Framer Motion</strong>, 
              <strong> Material UI</strong>, <strong> React Query</strong>,
              <strong> Axios</strong>,
              <strong> React Router</strong>,<strong> Swiper</strong> e
              <strong> Redux</strong>.
    
             
            </p>


              <ul>
              {IconsLibs.map((i, index)=>(

                <LiIconsLibs $width={i.customWidth} data-text={i.iconName} key={index}>{i.icon}</LiIconsLibs>


              ))}
              </ul>


        </LibsBox>

          <ToolsBox>
                <TitlesAbout> Ferramentas </TitlesAbout>

                <p> Quando prototipamos nossos projetos, o desenvolvimento do mesmo se torna mais rápido e produtivo, para tal tarefa e outras como edição de imagens, utilizo as ferramentas: 
                 <strong> Photoshop, Figma e Canva.</strong> Para os testes de API'S utilizo: <strong>Insomnia e Postman.</strong> </p> 

                <ul>

                  {IconsTools.map((i, index)=>(

                    <LiIconsTools $width={i.customWidth} data-text={i.iconName} key={index}> 
                      {i.icon}  
                    </LiIconsTools>


                  ))}

                </ul>
            
          </ToolsBox>


      </ContentSkills>

    </Container>
  )
}
