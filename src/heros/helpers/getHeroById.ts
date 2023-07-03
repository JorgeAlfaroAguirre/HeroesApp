import { heros } from "../data/Heros";

export const getHeroById = (id:string) => {

    return heros.find(hero=>hero.id ===id);
    
}
