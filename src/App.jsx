import './App.css'
import InputFatec from './components/InputFatec'
import ButtonFatec from './components/ButtonFatec'

function App() {
  

  return (
    <>
        <p>
          Entre em contato
        </p>
        <hr></hr>
        <InputFatec type = "text" placeholder = "Nome" />
        <InputFatec type = "text" placeholder = "e-mail" />
        <InputFatec type = "text" placeholder = "Telefone" />
        <hr></hr>
        <ButtonFatec label = "Enviar mensagem"/>
    </>
  )
}

export default App
