import { Button, Container, ImageMain, MainText } from './styles'

export default function Main() {
  return (
    
    <Container>

        <MainText>
            <div id='#home'>
              <p>Olá, sou o Yuri!</p>   

             <h1>Desenvolvedor Front-End.</h1>

            </div>
             

            <span>
                <p> Tenho 22 anos e sou desenvolvedor front-end com 10 meses 
                 de experiência trabalhando como freelancer.
                
                </p>

                 
                <Button>
                  <a target='_blank' href="https://drive.google.com/file/d/1WWiz0k31N81ZUsiU__B3vd1XVov-wXrK/view?usp=sharing">

                    <h3> Currículo </h3>

                  </a>
                
                </Button>

             

            </span>
           

        </MainText>


        <ImageMain src='/assets/images/profile.png'/>


    </Container>

  )
}
