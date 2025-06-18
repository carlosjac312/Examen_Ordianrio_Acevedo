import { FunctionalComponent } from "preact/src/index.d.ts";
import Fav from "../islands/Fav.tsx";

type Character = {
  id: string;
  image: string;
  name: string;
};

type Props = {
  personajes: Character[];
};

const CharacterList: FunctionalComponent<Props> = (props) => {
  return (
    <div class={"grid"}>
      {props.personajes.map((e) => {
        return (
          <div key={e.id} class={"card"}>
            <a href={`/characters/${e.id}`}>
              <img src={e.image} alt={e.name} />
            </a>
            <div class={"card-info"}>
              <a href={`/characters/${e.id}`} class={"name"}>{e.name}</a>
              <Fav id={e.id} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CharacterList;
