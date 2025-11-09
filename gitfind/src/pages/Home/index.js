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
      const {avatar_url, name, bio, login} = newUser
      setCurrentUser({avatar_url, name, bio, login});
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

          {currentUser?.name ? (<>

            <div className="perfil"> 
            <img src={currentUser.avatar_url}></img>

            <div>
              <h3>{currentUser.name}</h3>
              <span>@{currentUser.login}</span>
              <p> {currentUser.bio} </p>
            </div>
          </div>

          <hr/>

          </>
            
          ) : null}


          
          {repos?.length ? (
  
  <div>
    <h4 className="repositorio">Repositórios </h4>
    
    {/* Aqui está o .map() funcionando:
      1. Usamos 'repo' (singular) para cada item.
      2. Usamos parênteses () para "retornar" o JSX automaticamente.
      3. Passamos os dados REAIS (repo.name, etc.) para as props.
    */}
    {repos.map(repo => (
      <ItemList 
        key={repo.id} 
        title={repo.name} 
        description={repo.description}
      />
    ))}
  </div>

) : null}

        </div>
      </div>
    </div>
  );
}

export default App;
