import axios from "axios";
import { useEffect } from "react";

function SaveProject() {
    const body={
        "image": "teste",
        "preview": "projetinho de boa",
        "description":" deu tudo certo"
    }

    axios.post("http://www.localhost:3004/developer", body)
    .then(()=>console.log("rodei"));

    return null;
}

export default SaveProject;