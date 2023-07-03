import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  
  const { id } = useParams<{ id: string }>();
 
  const navigate = useNavigate()

  const onNavigateBack =()=>{
    navigate(-1);
  }
  
  if (!id) {
    return <h1>Error: Heroe no encontrado</h1>;
  }
  
  // const hero = getHeroById(id);
  const hero = useMemo(()=>getHeroById( id ), [ id ])
  
  console.log(hero)
  
  if(!hero){
    // return <h1>Error: Heroe no encontrado</h1>;
    return <Navigate to="/marvel"/>
  }

  return (
    <>

      <h1 className="pt-3">{hero.publisher}: {hero.superhero}</h1>
      <div className="row mt-5">

          <div className="col-4">
            <img 
              src={`/assets/heroes/${id}.jpg`} 
              alt={hero.superhero}
              className="img-thumbnail"
            />
          </div>

          <div className="col-8">
            <h3>{hero.superhero}</h3>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><b>Alter ego:</b> { hero.alter_ego }</li>
              <li className="list-group-item"><b>Publisher:</b> { hero.publisher }</li>
              <li className="list-group-item"><b>First Appearance:</b> { hero.first_appearance }</li>
            </ul>
            <h5 className="mt-3">Characters</h5>
            <p>{hero.characters}</p>
            <button 
              className="mt-3"
              onClick={onNavigateBack}
            >
              Volver atrás.

            </button>
          </div>


      </div>
    
    </>
  )
}
