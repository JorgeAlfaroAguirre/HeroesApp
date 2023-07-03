import { heros } from "../data/Heros";

export const getHerosByPublisher = (publisher:string) => {
  
    const validPublishers = ['Marvel Comics', 'DC Comics'];
  
    if (!validPublishers.includes(publisher)) {
    
        throw new Error(`${publisher} is not a valid publisher`);
  
    }
  
    return heros.filter((hero) => hero.publisher === publisher);

};
