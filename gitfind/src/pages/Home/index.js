import { useState } from "react";
import { Header } from "../../components/Header/index";
import background from "../../assets/github.png";
import "./style.css";
import ItemList from "../../components/itemList";

function App() {

  const [user, setUser] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  const [repos, setRepos] = useState(null);

  const handleGetData = async () => { 

    const userData = await fetch(`https://api.github.com/users/${user}`)
    const newUser = await userData.json();

    if(newUser.name){
      const {avatar_url, name, bio} = newUser
      setCurrentUser({avatar_url, name, bio});
    }

    const reposData = await fetch(`https://api.github.com/users/${user}/repos`)
    const newreposData = await reposData.json();

    if(newreposData.length){
      setRepos(newreposData);
    }

   }


  return (
    <div className="App">
      <Header />  

      <div className="conteudo">

        <img src={background} className="background" alt="background app" />

        <div className="info">

          <div className="inputbutton"> <input name="usuario" value={user} onChange={event => setUser(event.target.value)} placeholder="@username"/> 
          <button onClick={handleGetData}>Buscar</button>  </div>

          {currentUser.name ? (<>

            <div className="perfil"> 
            <img src="https://avatars.githubusercontent.com/u/167913877?v=4" className="profile" alt="perfil"></img>

            <div>
              <h3>Alex Alves</h3>
              <span>@Alexalves</span>
              <p> Descrição </p>
            </div>
          </div>

          <hr/>

          </>
            
          ) : null}


          

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
