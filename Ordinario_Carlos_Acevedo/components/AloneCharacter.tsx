import { FunctionalComponent } from "preact/src/index.d.ts";
import Fav from "../islands/Fav.tsx";

type Character = {
  id: string;
  image: string;
  name: string;
  house:string;
  alive:boolean;
};

const AloneCharacter: FunctionalComponent<Character> = (props) => {
  return (
    <div class={"detail"}>
        <img src={props.image}/>
        <h2>{props.name}</h2>
        <h3>Casa: {props.house}</h3>
        <h3>{props.alive ? "Vivo":"Muerto"}</h3>
        <Fav id={props.id}/>
        <br/>
        <a href={"/"}>Go Back</a>
    </div>
  );
};

export default AloneCharacter;