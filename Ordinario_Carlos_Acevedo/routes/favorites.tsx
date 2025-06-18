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

export const handler: Handlers<{character:Character}> = {
    async GET(req:Request, ctx:FreshContext) {
        const cookie = req.headers.get("Cookie");
        const favcookie = cookie?.split(";").find((c)=>c.startsWith("favorites="));
        let favNames:string[]=[];
        if(favcookie) {favNames = JSON.parse(decodeURIComponent(favcookie.split("=")[1]))}
        const response = await Axios.get("https://hp-api.onrender.com/api/characters");
        const character: Character[] = response.data;
        const filter = character.filter((char)=>favNames.includes(char.id));
        return ctx.render({character: filter});
    },
};

const Page = (props:PageProps<{character:Character[]}>) => {
    return (
        <CharacterList personajes={props.data.character}/>
    )
}

export default Page;