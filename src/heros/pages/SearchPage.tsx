import { useLocation, useNavigate } from "react-router-dom";
// import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queryString from 'query-string';
import { getHerosByName } from "../helpers";
import { HeroCard } from "../components";
// import { HeroPage } from "./HeroPage";


export const SearchPage = () => {
  
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } =  queryString.parse( location.search ) as { q?: string };;

  const heros = getHerosByName( q )
  console.log( heros )

  const { searchText, onInputChange } = useForm({ searchText: '' });

  const onSearchSubmit = ( event: React.FormEvent ) => {
    
    event.preventDefault();
    
    if(searchText.trim().length<=1) return;
    
    navigate(`?q=${ searchText.toLowerCase().trim()}`)
    
    console.log({searchText});
  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a Hero..."
              name="searchText"
              autoComplete="off"
              value={searchText || ''}
              onChange={onInputChange}
            />
          </form>

          <button className="btn btn-outline-primary mt-1">Search</button>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          <div className="alert alert-primary">Search a Hero...</div>
          <div className="alert alert-danger">There are no results with { q }.</div>
        </div>

        {heros.map(hero => (
          <HeroCard key={hero.id} {...hero} />
        ))}


        {/* {
          heros.map( hero=>{
            <HeroCard key={HeroPage.id}{...hero}/>
          })
        } */}
      </div>
    </>
  );
};
