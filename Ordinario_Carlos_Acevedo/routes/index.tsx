import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import CharacterList from "../components/CharacterList.tsx";

type Character = {
  id: string;
  image: string;
  name: string;
};

type Props = {
  personajes: Character[];
};

export const handler: Handlers<Props> = {
  GET: async(req:Request, ctx:FreshContext) => {
    const results = await Axios.get<Props>("https://hp-api.onrender.com/api/characters");
    return ctx.render({personajes: results.data})
  }
};

export default function Home(props:PageProps<Props>) {
  return (
    <CharacterList personajes={props.data.personajes}/>
  );
}
