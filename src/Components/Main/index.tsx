import { Button, Container, ImageMain, MainText } from './styles'

export default function Main() {
  return (
    
    <Container>

        <MainText>
            <div id='#home'>
              <p>Olá, sou o Yuri!</p>   

             <h1>Desenvolvedor Fullstack.</h1>

            </div>
             

            <span>
                <p> Tenho 23 anos e sou desenvolvedor front-end com 1 ano 
                 de experiência trabalhando como freelancer.
                
                </p>

                  
                <Button>
                  <a target='_blank' href="https://drive.google.com/drive/folders/1dKTaKsr2rsi_7Wrb2FTpfwGodzOrxik7?usp=sharing">

                    <h3> Currículo </h3>

                  </a>
                
                </Button>

             

            </span>
           

        </MainText>


        <ImageMain src='/assets/images/profile.png'/>


    </Container>

  )
}
