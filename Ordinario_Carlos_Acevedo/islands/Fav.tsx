import { useEffect, useState } from "preact/hooks";
import { FunctionalComponent } from "preact/src/index.d.ts";

type Props = {
  id: string;
};

const Fav:FunctionalComponent<Props> = ({id}) => {
    const [isFav, setIsFav] = useState<boolean>(false);
    useEffect(()=>{
        const cookie = document.cookie.split("; ").find((e)=>e.startsWith("favorites="));
        if(cookie) {
            const favs = JSON.parse(decodeURIComponent(cookie.split("=")[1]));
            setIsFav(favs.includes(id));
        };
    },[id]);
    const toogleFav = () => {
        const cookie =document.cookie.split(";").find((e)=>e.startsWith("favorites="));
        let favs: string[]=[];
        if(cookie) favs = JSON.parse(decodeURIComponent(cookie.split("=")[1]));
        const updateFav = isFav ? favs.filter((f)=> f !== id) : [...favs, id];
        document.cookie=`favorites=${encodeURIComponent(JSON.stringify(updateFav))}; Path=/`;
        setIsFav(!isFav);
    }
    
    return (
        <button type={"button"} onClick={toogleFav}>{isFav ? "Delete" : "Add"}</button>
    )
}

export default Fav;

