
import { Header } from "../../components/Header/index";
import background from "../../assets/github.png";
import "./style.css";
import ItemList from "../../components/itemList";

function App() {




  return (
    <div className="App">
      <Header />  

      <div className="conteudo">

        <img src={background} className="background" alt="background app" />

        <div className="info">

          <div className="inputbutton"> <input name="usuario" placeholder="@username"/> 
          <button>Buscar</button>  </div>


          <div className="perfil"> 
            <img src="https://avatars.githubusercontent.com/u/167913877?v=4" className="profile" alt="perfil"></img>

            <div>
              <h3>Alex Alves</h3>
              <span>@Alexalves</span>
              <p> Descrição </p>
            </div>
          </div>

          <hr/>

          <div>
            <h4 className="repositorio">Repositórios </h4>
            <ItemList title= "Teste titulo" description= "Teste Descrição"/>
            <ItemList title= "Teste titulo" description= "Teste Descrição"/>
            <ItemList title= "Teste titulo" description= "Teste Descrição"/>
            <ItemList title= "Teste titulo" description= "Teste Descrição"/>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
