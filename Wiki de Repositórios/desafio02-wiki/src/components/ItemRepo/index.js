import React from "react";

import { ItemContainer } from "./style";

function ItemRepo({repo}) {
  return (
   <ItemContainer>
    <h3>{repo.name}</h3>
    <p>{repo.full_name}</p>
    <a href={repo.html_url} rel="noreferrer" target="blank" className="">Ver Repositorio</a>
    <br></br>
    <a href="#" className="remover">Remove</a>
    
    <hr></hr>
   </ItemContainer>
  );
}

export default ItemRepo;
  