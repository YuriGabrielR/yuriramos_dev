import emailjs from '@emailjs/browser';
import {useState} from 'react'
import { FormArea, FormEmail, SucessMessage } from './styles';


export default function Form() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sucess, setSucess] = useState(false);



  function sendEmail(e:React.FormEvent<HTMLFormElement>){
    e.preventDefault();

    if(name === '' || email === '' || message=== '' ){

      alert("preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email:email
    }


    emailjs.send('service_od87fg5', 'template_190owdi', templateParams,'ATbB7ovyTwFO3fDIu')
    .then((response)=>{

      console.log(response.status, response.text);

      setSucess(true);

      setTimeout(() => {
        
       setSucess(false);


      }, 5000);
      
      setName('');
      setEmail('');
      setMessage('');



    }).catch((err)=>{

      window.alert('Aconteceu algum problema, estamos resolvendo!');
      console.log('erro:'+err)
    })

  }

  return (
   <FormArea>
    <FormEmail onSubmit={sendEmail}>

          <label> 

            <p>

              Nome <strong>*</strong>
            
            </p>

            <input 
              name="name" 
              required 
              autoComplete="off" 
              type="text"
              value={name}
              onChange={(e)=> {
                setName(e.target.value)
                setSucess(false)
              }}
            />

          </label>

          <label>

            <p>
              
              Email <strong>*</strong>
            
            </p>


            <input 
              id="email" 
              name="email" 
              required 
              prefix="Email"
              autoComplete="off" 
              type="email"
              value={email}
              onChange={(e)=> {
                setEmail(e.target.value)
                setSucess(false)
              }}

            />


          </label>


          <label>
            <p>
              Mensagem <strong>*</strong>
            </p>

            <textarea 
              id="message" 
              name="message" 
              value={message}
              required
              onChange={(e)=> {
                setMessage(e.target.value)
                setSucess(false)
              }}

            > 
              
            </textarea>
            
            <SucessMessage $isVisible={sucess}>
              <h3>Obrigado por entrar em contato! O email foi enviado, em breve
                te responderei.
              </h3>
            </SucessMessage>
          </label>

          <button type="submit" value='Send'> Enviar</button>

        </FormEmail>
      </FormArea>


  )
}
