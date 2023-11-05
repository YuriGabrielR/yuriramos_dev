import { ButtonsArea, Container, Project, ProjectImage, TechsTexts, TextsProjects, Title, Wrapper } from "./styles";
import { data } from "./data";
import { BiLogoGithub } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";

export default function Projects() {
  return (
    <Container>

      <Title>

        <p> Meus projetos. </p>
        <h2 id="#Portfólio" > Portfólio </h2>

      </Title>
     
      <Wrapper>



        {data.map((i, index)=>(
          
          <Project key={index}>
          <ProjectImage $src={i.src} />

          <TextsProjects>

            <h3>{i.name}</h3>

            <p> {i.description} </p>
          </TextsProjects>


          <TechsTexts>

            <span>
              <h4>Tecnologias Utilizadas:</h4>
              <p>{i.textTecs}</p>


              <ul>
                {i.techs.map((i, index)=>(

                  <li key={index}>{i}</li>

                ))}
              </ul>


            </span>

          </TechsTexts>


          <ButtonsArea>

            <button>
              <a target="_blank" href={i.deploy}> <AiOutlineEye/> Ver site </a>
              
            </button>

            <button>
              <a target='_blank'href={i.repository}>
                 <BiLogoGithub/> Github
              </a>
              
            </button>



          </ButtonsArea>

        </Project>



        ))}

       

      </Wrapper>

    </Container>
  )
}
