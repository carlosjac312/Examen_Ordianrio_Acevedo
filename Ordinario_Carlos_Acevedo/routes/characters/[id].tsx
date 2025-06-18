import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import AloneCharacter from "../../components/AloneCharacter.tsx";


type Character = {
  id: string;
  image: string;
  name: string;
  house:string;
  alive:boolean;
};

export const handler: Handlers<Character> = {
  GET: async(req:Request, ctx:FreshContext) => {
    const { id } = ctx.params;
    const results = await Axios.get<Character[]>(`https://hp-api.onrender.com/api/character/${id}`);
    const image = results.data[0].image==="" ? "./utils/NoImage.png" : results.data[0].image;
    return ctx.render({id, image, name: results.data[0].name, house: results.data[0].house, alive: results.data[0].alive});
  },
};

const Page = (props:PageProps<Character>) => {
    return(
        <AloneCharacter id={props.data.id} image={props.data.image} name={props.data.name} house={props.data.house} alive={props.data.alive}/>
    )
}

export default Page;