import gitLogo from "../assets/Logo.png";

import Input from "../components/Input";

import { Container } from "./style";

function App() {
  return (
    <Container className="App">
      <img className="Logo" src={gitLogo} width={72} height={72} alt="Github Logo"></img>
      <Input/>
    </Container>
  );
}

export default App;
