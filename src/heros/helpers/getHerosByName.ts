import { heros } from "../data/Heros";

export const getHerosByName = (name:string) => {
    
    name = name.toLowerCase().trim();

    if( name.length === 0 ) return [];

    return heros.filter(
        hero=>hero.superhero.toLowerCase().includes( name )
    );
}
