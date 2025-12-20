import { useState } from "react";
import gitLogo from "../assets/Logo.png";
import Button from "../components/Button";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import { api } from "../service/api";

import { Container } from "./style";

function App() {

  const [currentRepo, setCurretRepo] = useState('')

const [repos, setRepos] = useState([]);

const handleSearchRepo = async () => {

  const {data} =  await api.get(`repos/${currentRepo}`)

  if(data.id){

    const isExist = repos.find(repo => repo.id === data.id)

    if(!isExist ){

    setRepos(prev => [...prev, data]);
    setCurretRepo("")
    return


    }

  
  }

  alert("Repositorio nao encontrado")


}


  return (
    <Container className="App">
      <img className="Logo" src={gitLogo} width={72} height={72} alt="Github Logo"></img>
      <Input value = {currentRepo}  onChange={(e) => setCurretRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo repo={repo}/> )}
      
    </Container>
  );
}

export default App;
